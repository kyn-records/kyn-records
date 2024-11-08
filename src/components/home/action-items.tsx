import { Html } from "@react-three/drei";
import { Button } from "./button";
import { FaShoppingBag, FaYoutube } from "react-icons/fa";
import { BsMusicPlayerFill } from "react-icons/bs";
import { Vector3 } from "@react-three/fiber";
import { ReactNode } from "react";
import { FaRegNewspaper } from "react-icons/fa6";
import { Link } from "wouter";
import { IoMdMicrophone } from "react-icons/io";

const HTML = ({
  position,
  children,
}: {
  position: Vector3;
  children: ReactNode;
}) => {
  return (
    <Html
      position={position}
      as="div"
      center
      transform
      sprite
      distanceFactor={5}
      zIndexRange={[100, 0]}
      occlude
    >
      {children}
    </Html>
  );
};

export const ActionItems = () => {
  return (
    <>
      <HTML position={[2.2, 1.4, -0.6]}>
        <Button onClick={() => alert("hi")}>
          <FaShoppingBag size={11} />
        </Button>
      </HTML>
      <HTML position={[2.3, -0.5, 1.9]}>
        <Button onClick={() => alert("hi")}>
          <FaRegNewspaper size={11} />
        </Button>
      </HTML>
      <HTML position={[-1.2, 1.7, -1.3]}>
        <a target="_blank" href="https://www.youtube.com/@KYNRECORDS/featured">
          <Button>
            <FaYoutube size={11} />
          </Button>
        </a>
      </HTML>
      <HTML position={[-0.25, 0.5, 0.8]}>
        <Link href="/artist">
          <Button>
          <IoMdMicrophone size={13} />
          </Button>
        </Link>
      </HTML>
    </>
  );
};
