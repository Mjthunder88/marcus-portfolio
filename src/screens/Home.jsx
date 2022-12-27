import React from 'react'
import Header from '../UI/Header'
import Footer from '../UI/Footer'
import MainContent from '../components/MainContent'
import SkillsSection from '../components/skills/SkilsSection'


const Home = () => {
    return (
        <main>
        <Header />
        <MainContent />
        <SkillsSection />
        <Footer />
        </main>
    )
}

export default Home