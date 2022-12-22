import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GenerativeTree from "./Tree";
import { useContext } from "react";
import { TreeContext } from "../context/tree.context";
export default function CanvasTree(props) {
  console.log("PROPS:", props);
  const { tree, setTreeState } = useContext(TreeContext);
  console.log("TREE:", tree);
  return (
    <>
      {/* Canvas */}
      <Canvas gl={{ antialias: false }}>
        {/* performance data */}
        {/* <Perf position="bottom-left" /> */}

        {/* background */}
        <color args={["lightgrey"]} attach="background" />

        {/* Effects */}
        {/* <EffectComposer>
          <DepthOfField
            focusDistance={0.0025}
            focalLength={0.007}
            bokehScale={4}
            height={height}
          />
          <Noise opacity={0.1} />
          <Glitch delay={[0.5, 2]} duration={[0.01, 0.2]} />

          <Vignette offset={0.1} darkness={0.6} />
        </EffectComposer> */}

        {/* Camera */}
        <OrbitControls
          // makeDefault
          enableDamping={true}
          enablePan={false}
          enableRotate={true}
          enableZoom={false}
        />
        {/* lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[-10, 10, 5]} intensity={1.5} />

        {/* Geometry */}
        <GenerativeTree />
      </Canvas>
    </>
  );
}
