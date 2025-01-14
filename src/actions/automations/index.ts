"use server";

import { QueryClient } from "@tanstack/react-query";
import { onCurrentUser } from "../user";
import { createAutomation, getAutomations } from "./queries";

export const createAutomations = async () => {
  const user = await onCurrentUser();

  try {
    //passing the user clerk id to create an automation
    const create = await createAutomation(user.id);
    if (create) {
      return {
        status: 200,
        data: "Automation created successfully",
      };

      return {
        status: 400,
        data: "Oops! Something went wrong",
      };
    }
  } catch (error) {
    return {
      status: 500,
      data: "Internal server error",
    };
  }
};

export const getAllAutomations = async () => {
  const user = await onCurrentUser();

  try {
    const automations = await getAutomations(user.id);
    if (automations) {
      return { status: 200, data: automations.automations };
    }
    return { status: 404, data: [] };
  } catch (error) {
    return { status: 500, data: [] };
  }
};
