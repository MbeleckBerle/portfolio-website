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
            <li>Next.js</li>
            {/* <li>Angular</li> */}
            <li>React</li>
            <li>PostgreSQL</li>
            {/* <li>Git</li> */}
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
        {/* <li>Fullstack Academy of Code</li> */}
        <li>Fanshawe College Of Applied Arts And Technology</li>
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
          <p className="text-base lg:text-lg mb-8 text-justify">
            Hi, I&apos;m Mbeleck Berle—a Machine Learning Engineer with a knack
            for turning coffee into code and memes into machine learning models.
            I&apos;m currently on a quest to teach computers to understand
            sarcasm, and it&apos;s going really well. When I&apos;m not
            debugging, you can find me procrastinating by contributing to
            open-source projects or debating whether tabs or spaces are superior
            (it&apos;s tabs, obviously). I&apos;m always up for a good nerdy
            joke or a brainstorming session on how to take over the world with
            AI. 🚀 Let&apos;s build something awesome together, one line of code
            and one laugh at a time! Let&apos;s connect and geek out! 🤖
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
          <div className="mt-8 text-left">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
