import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { ModelViewer } from "./components/model-viewer";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] relative">
      {/* Background model viewer */}
      <ModelViewer />

      {/* Frosted glass div */}
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black/70 z-20">
        {/* This creates the frosted glass effect */}
      </div>

      <div className="relative z-30 container mt-24 mx-auto px-12 py-4">
        {" "}
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <HeroSection />
        {/* About Section */}
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
