import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar/index";
import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import {
  PrefetchUserAutomations,
  PrefetchUserProfile,
} from "@/react-query/prefetch";

type Props = {
  children: React.ReactNode;
  //WIP : getting the slug from the URL under the hood will pass it as props to the sidebar component
  params: { slug: string };
};

const layout = async ({ children, params }: Props) => {
  //WIP : query client fetch data

  const query = new QueryClient();

  //prefetching of all the required data
  await PrefetchUserProfile(query);
  await PrefetchUserAutomations(query);
  return (
    //to access all the server side prefetched data, we need to wrap everything into a HydrationBoundary
    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3">
        {/* Sidebar */}
        <Sidebar slug={params.slug} />
        {/* Navbar */}
        <div className="flex flex-col overlow-auto lg:ml-[250px] lg:pl-10 lg:py-5">
          <Navbar slug={params.slug} />
          {children}
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default layout;
