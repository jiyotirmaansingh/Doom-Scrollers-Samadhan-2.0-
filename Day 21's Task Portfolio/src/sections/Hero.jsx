import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import Astronaut from "../components/Astronaut";
import { OrbitControls, Environment} from "@react-three/drei";
import Loader from "../components/Loader";

const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} />
          <Environment preset="city" />
          <Suspense fallback={<Loader/>}>
          <Astronaut scale={2} />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </figure>
    </section>
  );
};


export default Hero;