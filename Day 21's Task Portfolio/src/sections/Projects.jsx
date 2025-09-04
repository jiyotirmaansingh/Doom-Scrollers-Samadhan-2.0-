import { myProjects } from "../constants";
import Project from "../components/Project";
import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Projects = () => {
  const [preview, setPreview] = useState(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-20 c-space mb-20" // ✅ controlled bottom spacing only
    >
      <h2 className="text-heading">My Selected Projects</h2>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {preview && (
        <motion.img
          src={preview}
          alt="project preview"
          className="fixed top-0 left-0 z-50 object-cover w-80 h-56 rounded-lg shadow-lg pointer-events-none"
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;