"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { refreshToken } from "@/lib/fetch";
import { UpdateIntegration } from "../integrations/queries";

//helper function to check if user exists or not
export const onCurrentUser = async () => {
  const user = await currentUser();

  if (!user) return redirect("/sign-in");

  return user;
};

export const onBoardUser = async () => {
  const user = await onCurrentUser();

  try {
    const found = await findUser(user.id);
    if (found) {
      if (found.integrations.length > 0) {
        const today = new Date();

        //the time left until the integration expires
        const timeLeft =
          found.integrations[0].expiresAt?.getTime()! - today.getTime();

        //the number of days left until the integration expires
        const days = Math.round(timeLeft / (1000 * 3600 * 24));

        if (days < 5) {
          console.log("refresh");

          //The function waits for the promise to resolve and stores the new token in the refresh variable.
          const refresh = await refreshToken(found.integrations[0].token);

          const today = new Date();

          const expire_date = today.setDate(today.getDate() + 60);

          //Calls the index.ts ) function with the integration ID, the new access token, and the new expiration date. The function waits for the promise to resolve and stores the result in the update_token variable.
          const update_token = await UpdateIntegration(
            found.integrations[0].id,
            refresh.access_token,
            new Date(expire_date)
          );

          if (!update_token) {
            console.log("Update token failed");
          }
        }
      }

      return {
        status: 200,
        data: {
          firstname: found.firstname,
          lastname: found.lastname,
        },
      };
    }

    const created = await createUser(
      user?.id,
      user?.emailAddresses[0].emailAddress,
      user?.firstName!,
      user?.lastName!
    );
    return {
      status: 201,
      data: created,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
    };
  }
};

export const onUserInfo = async () => {
  const user = await onCurrentUser();

  try {
    const profile = await findUser(user.id);

    if (profile) {
      return {
        status: 200,
        data: profile,
      };

      return { status: 404 };
    }
  } catch (error) {
    return {
      status: 500,
    };
  }
};
