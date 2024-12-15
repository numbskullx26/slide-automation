import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="flex overflow-hidden px-4 py-1 items-center flex-1 border-[1px] border-[#3352CC] gap-x-2 rounded-full">
      <SearchIcon color="#3325CC" />
      <Input
        className="border-none outline-none ring-0 focus:ring-0 flex-1"
        placeholder="Seach by name, email or Status"
      />
    </div>
  );
};

export default Search;
