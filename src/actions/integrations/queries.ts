"use server";

import { client } from "@/lib/prisma";

export const UpdateIntegration = async (
  token: string,
  expire: Date,
  id: string
) => {
  return await client.integrations.update({
    where: {
      id,
    },
    data: {
      token,
      expiresAt: expire,
    },
  });
};
