"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

type TabData = {
  title: string;
  id: string;
  content: React.ReactNode;
};

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Web Development</h3>
          <ul className="list-none pl-2">
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
          <ul className="list-none pl-2">
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
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none pl-2">
        <li>Fanshawe College Of Applied Arts And Technology</li>
        {/* <li>University of California, Santa Cruz</li> */}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-none pl-2">
        <li>Machine Learning in Production</li>
        <li>Machine Learning Engineer</li>
        <li>Google Data Analytics</li>
        <li>Social Media Marketting</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="flex justify-center py-8 px-4 xl:px-16">
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-8">
            🎓 A Machine Learning Engineer with a knack for turning coffee into
            code and memes into machine learning models. 🧠 Currently on a quest
            to teach computers to understand sarcasm...it's going really well.
            💻 When I'm not debugging, you can find me procrastinating by
            contributing to open-source projects or debating whether tabs or
            spaces are superior (it's tabs, obviously). 🔍 Always up for a good
            nerdy joke or a brainstorming session on how to take over the world
            with AI. 🚀 Let's build something awesome together, one line of code
            and one laugh at a time! Connect with me and let's geek out!
          </p>
          <div className="flex flex-row justify-center items-center gap-4 mb-8">
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
