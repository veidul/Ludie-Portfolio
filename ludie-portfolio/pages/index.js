import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
