import React from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import MainContent from "../components/MainContent";
import SkillsSection from "../components/skills/SkilsSection";
import ContactSection from "../components/contact/ContactSection";

const Home = () => {
  return (
    <main>
      <Header />
      <MainContent />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Home;
