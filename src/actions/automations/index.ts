"use server";

import { onCurrentUser } from "../user";

export const getAllAutomations = async() => {
  const user = await onCurrentUser();
};

