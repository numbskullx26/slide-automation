"use client";
import { usePaths } from "@/hooks/use-nav";
import { cn, getMonth } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import GradientButton from "../gradient-button";
import { Button } from "@/components/ui/button";
import { useQueryAutomations } from "@/hooks/user-queries";
import CreateAutomation from "../create-automation";

type Props = {};

const AutomationList = (props: Props) => {
  //WIP : GET THE AUTOMATON LIST DATA

  const { data } = useQueryAutomations();

  const { pathname } = usePaths();
  //WIP : if no automation exist show no automation

  console.log(data);

  if (data?.status !== 200 || data.data.length === 0) {
    return (
      <div className="h-[70vh] flex justify-center items-center flex-col gap-y-3">
        <div className="text-lg text-gray-400">No automations created</div>
        <CreateAutomation />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-3">
      {data.data!.map((automation) => (
        <Link
          href={`${pathname}/${automation.id}`}
          key={automation.id}
          className="bg[-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient-automations flex border-[#545454]"
        >
          <div className="flex flex-col flex-1 items-start">
            <h2 className="text-xl font-semibold">{automation.name}</h2>
            <p className="text-[#9B9CA0] text-sm font-light mb-2 ">
              This is from the Comment
            </p>
            {/* // WIP : AUTOMATON KEYWORDS */}
            {automation.keywords.length > 0 ? (
              <div className="flex flex-wrap mt-3 gap-x-2">
                <div
                  className={cn(
                    "rounded-full px-4 py-1 capitalize",
                    (0 + 1) % 2 == 0 &&
                      "bg-keyword-green/15 border-2 bg-keyword-green",
                    (1 + 1) % 2 == 0 &&
                      "bg-keyword-purple/15 border-2 border-keyword-purple",
                    (2 + 1) % 2 == 0 &&
                      "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                    (3 + 1) % 2 == 0 &&
                      "bg-keyword-red/15 border-2 border-keyword-red"
                  )}
                >
                  Get Started
                </div>
              </div>
            ) : (
              <div className="rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1">
                <p className="text-sm text-[#bfc0c3]">No Keywords</p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between">
            <p className="captalize text-s font-light text-[#9B9CA0]">
              {/* WIP : attach real date */}
              {getMonth(automation.createdAt.getUTCMonth() + 1)}{" "}
              {automation.createdAt.getUTCDate() === 1
                ? `${automation.createdAt.getUTCDate()}st`
                : `${automation.createdAt.getUTCDate()}th`}{" "}
              {automation.createdAt.getUTCFullYear()}
            </p>
            {/* WIP : show the appropriate button based on the listener */}

            {automation.listener?.listener === "SMARTAI" ? (
              <GradientButton
                type="BUTTON"
                className="w-full bg-background-80 hover:bg-background-80 text-white"
              >
                Smart AI
              </GradientButton>
            ) : (
              <Button className=" bg-background-80 hover:bg-background-80 text-white">
                Standard
              </Button>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AutomationList;
