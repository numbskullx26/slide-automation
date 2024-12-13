import React from "react";
import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";
type Props = {
  children: React.ReactNode;
  className?: string;
  state: Boolean;
  color?: string;
};

const Loader = ({ children, color, state, className }: Props) => {
  return state ? (
    <div className={cn(className)}>
      <Spinner color={color} />
    </div>
  ) : (
    children
  );
};

export default Loader;
