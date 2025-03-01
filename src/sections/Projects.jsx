// import React from "react";
// import { myProjects } from "../constants";
// import { ThreeDCardDemo } from "../components/ThreeDCardDemo";
// const Projects = () => {
//   return (
//     <section className="c-space my-20" id="work">
//       <h2 className="text-4xl font-bold text-center text-neutral-200">
//         My Projects
//         </h2>
//       <ThreeDCardDemo/>
//     </section>
//   );
// };

// export default Projects;


import React from "react";
import { myProjects } from "../constants";
import { ThreeDCardDemo } from "../components/ThreeDCardDemo";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="c-space my-20" id="work">
      <h2 className="text-4xl font-bold text-center text-neutral-200">
        My Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {myProjects.slice(0, 2).map((project, index) => (
          <ThreeDCardDemo key={index} project={project} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-10 text-neutral-400">
        <a
          href="https://github.com/AyushiSrivastava11"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg font-semibold hover:text-neutral-200 transition"
        >
          <FaGithub className="text-2xl" />
          To see more, check my GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
