import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const layout = ({ children, params }: Props) => {
  //query
  //query client fetch data

  return (
    <div className="p-3">
      {/* Sidebar */}
      {/* Navbar */}
    </div>
  );
};

export default layout;
