import { onBoardUser } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  //WIP : Server Action Onboard the user
  const user = await onBoardUser();

  if (user.status === 200 || user.status === 201) {
    console.log("Redirecting to dashboard");
    return redirect(`dashboard/${user.data?.firstname}${user.data?.lastname}`);
  }
  console.log("Redirecting to sign-in");
  return redirect("/sign-in");
  // WIP : 200 || 201
};

export default page;
