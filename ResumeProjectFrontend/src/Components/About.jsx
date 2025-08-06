import React from 'react'
import PersonalInfo from './PersonalInfo'
import Contact from './Contact'
import SocialAccount from './SocialAccount'

const About = () => {
  return (
    <>
      <section className="resume-section" id="about">
            <div className="resume-section-content">
              <PersonalInfo />
              <Contact />
              <p className="lead mb-5">
                I am experienced in leveraging agile frameworks to provide a
                robust synopsis for high level overviews. Iterative approaches
                to corporate strategy foster collaborative thinking to further
                the overall value proposition.
              </p>
              <SocialAccount />
              
            </div>
          </section>
    </>
  )
}

export default About
