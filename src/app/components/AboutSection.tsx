"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

type TabData = {
  title: string;
  id: string;
  content: JSX.Element;
};

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Web Development</h3>
          <ul className="list-disc pl-2">
            <li>JavaScript</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Nest.js</li>
            <li>Angular</li>
            <li>React</li>
            <li>PostgreSQL</li>
            <li>Git</li>
            <li>AWS Cloud Products</li>
            <li>Azure</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Machine Learning</h3>
          <ul className="list-disc pl-2">
            <li>Computer Vision</li>
            <li>Natural Language Processing</li>
            <li>Large Language Models (LLMs)</li>
            <li>HuggingFace</li>
            <li>Langchain</li>
            <li>Transformer-based models</li>
            <li>GenAI</li>
            <li>TensorFlow-cuda</li>
            <li>PyTorch</li>
            <li>MLOps</li>
            <li>AWS Kubeflow Pipelines</li>
          </ul>
        </div>
        {/* <div>
          <h3 className="font-semibold mb-2">Data Science</h3>
          <ul className="list-disc pl-2">
            <li>Data Preprocessing</li>
            <li>Feature Engineering</li>
            <li>Hyper-parameter Optimization</li>
            <li>Model Development</li>
            <li>pandas</li>
            <li>Pillow</li>
            <li>Matplotlib</li>
            <li>NLTK</li>
            <li>scikit-learn</li>
            <li>Hadoop</li>
            <li>Apache Spark</li>
            <li>Atlassian Tools</li>
          </ul>
        </div> */}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image
          src="/images/about-image.png"
          alt="image"
          width={500}
          height={500}
        /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I'm Mbeleck Berle—a passionate Machine Learning Engineer with a
            strong foundation in Computer Science from Legon University and
            advanced AI studies at Fanshawe College. I specialize in
            transforming data into innovative solutions using deep learning,
            NLP, and cloud technologies. Whether leading cutting-edge projects
            or mentoring future tech talent, I'm dedicated to pushing the
            boundaries of what's possible in AI. Let's connect and innovate
            together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
