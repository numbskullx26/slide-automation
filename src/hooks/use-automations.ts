import { useMutationData } from "./use-mutation-data";
import { createAutomations } from "@/actions/automations";

export const useCreateAutomation = () => {
  const { mutate, isPending } = useMutationData(
    ["create-automation"],
    () => createAutomations(),
    "user-automations"
  );

  return { mutate, isPending };
};
