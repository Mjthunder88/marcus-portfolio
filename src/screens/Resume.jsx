import React from 'react'
import Header from '../UI/Header'

import resume from '../assets/resumePicture.png'
import resume2 from '../assets/resumePicture2.png'


const Resume = () => {
    return (
        <section className='resume-screen'>
            <Header />
            <div className='resume-container'>
            <img className='resume' src={resume} alt='marcus_johnson_resume' />
            <img className='resume' src={resume2} alt='marcus_johnson_resume' />
            </div>
        </section>
    )
}

export default Resume