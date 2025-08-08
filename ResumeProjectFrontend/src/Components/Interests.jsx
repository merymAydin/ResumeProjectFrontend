import React, { useContext } from 'react'
import { InterestContext } from '../Contexts/InterestContext';

const Interests = () => {
  const {interests} = useContext(InterestContext);
  return (
    <>
      <section className="resume-section" id="interests">
            <div className="resume-section-content">
              <h2 className="mb-5">Interests</h2>
              {
                interests.map(interest => (
                  <p key={interest.id} className="mb-0">
                    {interest.description ? interest.description : "No description available"}
                  </p>)
                )
              }
            </div>
      </section>
    </>
  )
}

export default Interests
