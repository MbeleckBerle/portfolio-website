"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// Define the type for the project data
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Cyber Security Anomaly detection",
    description: "Anomaly detection on the KDD99 dataset",
    image: "/images/projects/1.png",
    tag: ["All", "Machine Learning"],
    gitUrl:
      "https://github.com/MbeleckBerle/KDD-anomaly-detection/blob/main/project2.1.1.ipynb",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "PDF Querry Application",
    description:
      "Streamlit-based web application that allows users to upload a PDF file and ask questions based on its contents.",
    image: "/images/projects/2.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/MbeleckBerle/langchain_qa_app",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Product Classification",
    description: "Categorization of e-commerce products based on description",
    image: "/images/projects/3.png",
    tag: ["All", "Machine Learning"],
    gitUrl:
      "https://github.com/MbeleckBerle/ecommerce_product_classification/blob/main/ecommerce_categorization.ipynb",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Sentiment Analysis",
    description: "Emotion analysis on Human text",
    image: "/images/projects/4.png",
    tag: ["All", "Machine Learning"],
    gitUrl:
      "https://github.com/MbeleckBerle/twitter-X-sentiment-preprocessing/blob/main/sentiment_preprocessing.ipynb",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Text Generation",
    description: "This project leverages LSTMs for word level text generation",
    image: "/images/projects/5.png",
    tag: ["All", "Machine Learning"],
    gitUrl:
      "https://github.com/MbeleckBerle/text_generation_LSTM/blob/main/text_generation.ipynb",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Weather Forecasting",
    description:
      "This project uses the last 30 days to predict the weather of the next day",
    image: "/images/projects/6.png",
    tag: ["All", "Data Science"],
    gitUrl:
      "https://github.com/MbeleckBerle/pm-data-science/blob/main/pm.ipynb",
    previewUrl: "/",
  },
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string): void => {
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
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Science"
          isSelected={tag === "Data Science"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="web"
          isSelected={tag === "Web"}
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
