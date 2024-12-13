import React from "react";
import {
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

import Loader from "../loader";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
  
type Props = {};

const ClerkAuthState = (props: Props) => {
  return (
    <>
      <ClerkLoading>
        <Loader state>
          <></>
        </Loader>
      </ClerkLoading>

      <SignedOut>
        <SignInButton>
          <Button className="rounded-xl bg-[#252525] text-white hover:bg-[#252525]/70">
            <User />
            Login
          </Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton>
          <UserButton.UserProfileLink
            label="Dashboard"
            url={`/dashboard`}
            labelIcon={<User size={16} />}
          />
        </UserButton>
      </SignedIn>
    </>
  );
};

export default ClerkAuthState;
