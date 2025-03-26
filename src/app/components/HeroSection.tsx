"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ModelViewer } from "./model-viewer";

const HeroSection: React.FC = () => {
  return (
    <section className="lg:py-16 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl px-4 text-center">
        {/* Fixed-height container for dynamic text */}
        <div className="h-64 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Mbeleck",
                1000,
                "Full Stack Web Developer",
                1000,
                "Machine Learning Developer",
                1000,
                "Data Analyst",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>
        </div>
        {/* Buttons below the dynamic text */}
        <div className="mt-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-800 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
