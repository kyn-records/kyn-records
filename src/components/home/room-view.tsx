import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { ActionItems } from "./action-items";

function Room() {
  const room = useGLTF("/room.glb");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cameraRef = useRef<any>(null);

  const getFov = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 700) {
      return 20;
    } else {
      return 29;
    }
  }

  return (
    <Canvas
      style={{ height: "100%", width: "100%", background: "#101010" }}
      camera={{ fov: getFov(), position: [10, 10, 17] }}
      shadows
      dpr={[1, 1.5]}
    >
      <hemisphereLight intensity={0.15} groundColor="black" />
      <ambientLight />
      <directionalLight intensity={6} position={[1, 1.2, 2.5]} />
      {/* Desk Lights */}
      <pointLight position={[-1.5, 2, 0.2]} intensity={15} />
      <pointLight position={[0, 5, -3]} intensity={8} />
      {/* Closet Lights */}
      <pointLight position={[2.3, 1, 0.2]} intensity={15} />
      <primitive object={room.scene} />
      {/* Action Items */}
      <ActionItems />
      {/* Post Processing */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          mipmapBlur
          luminanceSmoothing={0.9}
          intensity={0.06}
        />
        <Noise opacity={0.01} />
        <Vignette eskil={false} offset={0.05} darkness={1} />
      </EffectComposer>
      <OrbitControls ref={cameraRef} target={[0, 1, 0]} />
    </Canvas>
  );
}

export default Room;
