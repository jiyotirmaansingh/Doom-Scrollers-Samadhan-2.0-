import React from "react";
import {motion} from "motion/react";
const ProjectDetails = ({ title, description, subDescription, image, href, tags, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div className="relative max-w-2xl shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border border-white/10"
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      >
        
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 rounded-sm bg-midnight p-1 hover:bg-gray-500"
        >
          <img src="assets/close.svg" alt="Close" className="w-6 h-6" />
        </button>

        {/* Project image */}
        <img src={image} alt={title} className="w-full rounded-t-2xl" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 text-neutral-400">{description}</p>

          {/* Sub descriptions */}
          {subDescription?.map((subDesc, index) => (
            <p key={index} className="mb-3 text-neutral-400">
              {subDesc}
            </p>
          ))}

          <div className="flex items-center justify-between mt-4">
            {/* Tags */}
            <div className="flex gap-3">
              {tags?.map((tag, index) => (
                <img
                  key={index}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>

            {/* Project link */}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              View Project
              <img src="assets/arrow-up.svg" alt="arrow" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;