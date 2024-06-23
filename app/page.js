import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  return (
    <>
      <SignedOut>
        <div className="bg-blue-900 w-screen h-screen flex items-center">
          <div className="text-center w-full">
            <SignInButton>
              <button className="bg-white p-2 px-4 rounded-lg">Login</button>
            </SignInButton>
          </div>
        </div>{" "}
      </SignedOut>
      {user && (
        <SignedIn>
          <UserButton />
          <p>Hello {user.fullName}</p>
        </SignedIn>
      )}
    </>
  );
}
