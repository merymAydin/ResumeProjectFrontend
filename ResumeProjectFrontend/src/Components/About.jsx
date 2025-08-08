import PersonalInfo from './PersonalInfo'
import Contact from './Contact'
import SocialAccount from './SocialAccount'
import { useContext } from 'react'
import { AboutContext } from '../Contexts/AboutContext'


const About = () => {
  const { abouts } = useContext(AboutContext);
  return (
      <section className="resume-section" id="about">
            <div className="resume-section-content">
              <PersonalInfo />
              <Contact />
              {
                abouts.map(about => <p className="lead mb-5" key={about?.id}>{about?.description}</p>)
              }
              <SocialAccount />
            </div>
      </section>
  )
}

export default About
