import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="h-screen justify-center items-center flex">{children}</div>
  );
};

export default layout;
