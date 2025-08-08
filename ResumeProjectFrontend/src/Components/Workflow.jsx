import React, { useContext } from 'react'
import { SkillContext } from '../Contexts/SkillContextProvider';


const Workflow = () => {
  const {workflow} = useContext(SkillContext);
  return (
    <>
    <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          {
            Array.isArray(workflow) && workflow.map((item, index) => (
              <li key={index}>
                <span className="fa-li"><i className={item?.icon} /></span>
                {item?.title}
              </li>
            ))
          }
        </ul>
    </>
  )
}

export default Workflow