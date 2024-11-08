import { FaRecordVinyl } from "react-icons/fa";
import { Button } from "../ui/button";
import { Link } from "wouter";

export const Header = () => {
  return (
    <div className="bg-neutral-800 p-4 text-white flex justify-between items-center sticky top-0 left-0">
      <Link href="/">
        <div className="flex gap-2 items-between opacity-75 items-center">
          <FaRecordVinyl size={38} />
          <div>
            <h1 className="font-bold">KYN Records</h1>
            <p className="opacity-60">This is description placeholder</p>
          </div>
        </div>
      </Link>
      <Button variant={"link"}>Artist</Button>
    </div>
  );
};
