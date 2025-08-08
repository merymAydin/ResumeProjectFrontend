import React, { useContext } from 'react'
import { SkillContext } from '../Contexts/SkillContextProvider';

const ProgramLanguageAndTools = () => {
  const {programAndTools} = useContext(SkillContext);
  return (
    <>
      <div className="subheading mb-3">
                Programming Languages &amp; Tools
              </div>
              <ul className="list-inline dev-icons">
                {
                  programAndTools.map(item => <li className="list-inline-item" key={item?.id}>
                  <i className={item?.icon} />
                </li>)
                }
              </ul>
    </>
  )
}

export default ProgramLanguageAndTools
