"use client";
import { usePaths } from "@/hooks/use-nav";
import { LogoSmall } from "@/svgs/logo-small";

import React from "react";
import Items from "./items";

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
      </div>
    </div>
  );
};

export default Sidebar;
