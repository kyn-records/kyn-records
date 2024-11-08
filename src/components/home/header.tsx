import { Button } from "../ui/button";
import { Link } from "wouter";
import KYNLogo from "@/assets/kyn-logo.png"

export const Header = () => {
  return (
    <div className="bg-neutral-900 p-4 text-white flex justify-between items-center sticky top-0 left-0 z-[99999] shadow-lg">
      <Link href="/">
        <div className="flex gap-2 items-between opacity-75 items-center">
          <img src={KYNLogo} className="h-12" alt="KYN Records Logo" />
          <div>
            <h1 className="font-bold">KYN Records</h1>
            <p className="opacity-60">This is description placeholder</p>
          </div>
        </div>
      </Link>
      <Link href="/artist">
        <Button variant={"link"}>Artist</Button>
      </Link>
    </div>
  );
};
