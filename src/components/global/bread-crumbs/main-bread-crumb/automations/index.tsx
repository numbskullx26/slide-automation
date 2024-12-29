import ActivateAutomationButton from "@/components/global/activate-automation-button";
import { PencilDuoToneBlack } from "@/icons";
import { ChevronRight } from "lucide-react";
import React from "react";

type Props = {
  id: String;
};

const AutomationsBreadCrumb = ({ id }: Props) => {
  // WIP : GET THE AUTOMATON LIST DATA
  // WIP : User mutation stuff to update the automations
  return (
    <div className="flex justify-between items-center rounded-full w-full p-5 bg-[#18181B1A]">
      <div className="flex gap-x-3 items-center">
        <p className="text-[#9B9CA0]">Automations</p>
        <ChevronRight color="#9B9CA0" className="flex-shrink-0" />
        <span className="flex gap-x-3 items-center min-w-0">
          {/* WIP : Show the editing data  */}
          <p className="text-[#9B9CA0] truncate">
            This is the automation title
          </p>
          <span
            className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4
          "
          >
            <PencilDuoToneBlack />
          </span>
        </span>
      </div>

      <div className="flex gap-x-5 items-center ml-auto">
        <p className="text-text-secondary/60 text-sm hidden md:block truncate min-w-0">
          All changes are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Changes Saved
          </p>
          <p className="text-text-secondary text-sm truncate min-w-0">
            Undo | Redo
          </p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
};

export default AutomationsBreadCrumb;
