import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ignews",
    description: "📝 Blog de noticias sobre o mundo React.",
    image: "/images/projects/ignews.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gustavogk/ignews",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Happy",
    description:
      "💜 O Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz ",
    image: "/images/projects/happy.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/gustavogk/next-level-week-3",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Dashgo",
    description:
      "💻 Dashgo trata-se de um dashboard de controle de usuários, como principal diferencial utiliza a biblioteca ChakraUI para construção das interfaces.",
    image: "/images/projects/homeDashgo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gustavogk/dashgo",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Letmeask",
    description:
      "💬 O Letmeask é um site de salas de perguntas e respostas. Criado utilizando React e Firebase.",
    image: "/images/projects/letmeask.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gustavogk/letmeask",
    previewUrl: "https://letmeask-af084.web.app",
  },
  {
    id: 5,
    title: "Dtmoney",
    description: "💰 App de controle financeiro",
    image: "/images/projects/dtmoney.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gustavogk/dtmoney",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
