import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { AutomationDuoToneWhite } from "@/icons";

type Props = {};

const CreateAutomation = (props: Props) => {
  //WIP : automation from the database
  return (
    <Button className="lg:px-10 py-6 bg-gradient-to-br from-[#3352CC] to-[#1C2D70] font-medium text-white hover:opacity-80 rounded-full">
      <Loader state={false}>
        <AutomationDuoToneWhite />
        <p className="lg:inline hidden">Create an Automation</p>
      </Loader>
    </Button>
  );w
};

export default CreateAutomation;
