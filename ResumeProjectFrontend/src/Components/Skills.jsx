import React from 'react'
import ProgramLanguageAndTools from './ProgramLanguageAndTools'
import Workflow from './Workflow'

const Skills = () => {
  return (
    <>
      <section className="resume-section" id="skills">
            <div className="resume-section-content">
              <h2 className="mb-5">Skills</h2>
              <ProgramLanguageAndTools />
              <Workflow />
            </div>
          </section>
    </>
  )
}

export default Skills
