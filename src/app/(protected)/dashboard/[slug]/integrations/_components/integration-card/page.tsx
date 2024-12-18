import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
  icon: React.ReactNode;
};

const IntegrationCard = ({ title, description, icon, strategy }: Props) => {
  //WIP : wire up fetching data and get the integrations from the db
  return (
    <div className="border-2 border-[#3352CC] rounded-2xl gap-x-5 p-5 flex items-center">
      {icon}
      <div className="flex flex-col flex-q">
        <h3 className="text-xl">{title}</h3>
        <p className="text-[#9D9D9D] text-base w-full md:w-10/12 xl:w-8/12 2xl:w-6/12">
          {description}
        </p>
      </div>
      <Button className="bg-gradient-to-br text-white rounded-full text-lg from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-70 duration-100">
        Connect
      </Button>
    </div>
  );
};

export default IntegrationCard;
