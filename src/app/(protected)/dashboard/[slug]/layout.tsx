import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar/index";
import React from "react";

type Props = {
  children: React.ReactNode;
  //getting the slug from the URL under the hood will pass it as props to the sidebar component
  params: { slug: string };
};

const layout = ({ children, params }: Props) => {
  //query
  //query client fetch data

  return (
    <div className="p-3">
      {/* Sidebar */}
      <Sidebar slug={params.slug} />
      {/* Navbar */}
      <div className="flex flex-col overlow-auto lg:ml-[250px] lg:pl-10 lg:py-5">
        <Navbar slug={params.slug} />
      </div>
    </div>
  );
};

export default layout;
