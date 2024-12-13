"use client";
import { usePaths } from "@/hooks/use-nav";
import { LogoSmall } from "@/svgs/logo-small";

import React from "react";
import Items from "./items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { HelpDuoToneWhite } from "@/icons";
import { SubscriptionPlan } from "../subscription-plan";

import UpgradeCard from "./upgrade";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  //custom hook created called from hooks directory
  const { page } = usePaths();
  return (
    <div
      className="border-[#545454]
     border-[1px]
     fixed
      w-[250px]
      top-0
      bottom-0 
      left-0 
      radial 
      overflow-hidden 
      m-3 rounded-3xl 
      bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD] 
      hidden 
      lg:inline-block"
    >
      <div className="flex flex-col h-full w-full bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl p-3">
        <div className="flex gap-x-2 items-center justify-center p-5">
          <LogoSmall />
        </div>
        <div className="flex flex-col py-3">
          <Items page={page} slug={slug} />
        </div>
        <div className="px-16 my-4">
          <Separator orientation="horizontal" className="bg-[#333336]" />
        </div>
        <div className="flex flex-col px-3 gap-y-5">
          <div className="flex gap-x-5">
            <ClerkAuthState />
            <p className="text-[#9B9CA0]">Profile</p>
          </div>
          <div className="flex gap-x-5">
            <HelpDuoToneWhite />
            <p className="text-[#9B9CA0]">Help</p>
          </div>
        </div>
        <SubscriptionPlan>
          <div className="flex flex-1 flex-col justify-end">
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  );
};

export default Sidebar;
