"use client";
import { usePaths } from "@/hooks/use-nav";
import React from "react";

type Props = {
  slug: string;
};

const index = ({ slug }: Props) => {
  //custom hook created called from hooks directory
  const {} = usePaths();
  return <div>index</div>;
};

export default index;
