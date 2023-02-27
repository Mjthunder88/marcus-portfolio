import React from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import MainContent from "../components/MainContent";
import SkillsSection from "../components/skills/SkilsSection";
import ContactSection from "../components/contact/ContactSection";

import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

const Home = () => {
  return (
    <>
      <Header />
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection>
            <MainContent />
          </FullpageSection>
          <FullpageSection>
            <SkillsSection />
          </FullpageSection>
          <FullpageSection>
            <ContactSection />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
      <Footer />
    </>
  );
};

export default Home;
