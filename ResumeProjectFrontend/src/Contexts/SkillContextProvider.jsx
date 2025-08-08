import React, { createContext, useEffect, useState } from 'react'

const SkillContext = createContext();

const SkillContextProvider = ({children}) => {
    const [programAndTools, setProgramAndTools] = useState([]);
    const [workflow, setWorkflow] = useState([]);

    const getProgramsAndTools = async() => {
        try {
            const response = await fetch('https://localhost:7156/api/Skills/GetProgramLanguageAndTools');
            const data = await response.json();
            setProgramAndTools(data);
        } catch (error) {
            console.error("Error fetching programs and tools...", error);
        }
    }
    const getWorkflows = async() => {
        try {
            const response = await fetch('https://localhost:7156/api/Skills/GetWorkflows');
            const data = await response.json();
            setWorkflow(data);
        } catch (error) {
            console.error("Error fetching programs and tools...", error);
        }
    }
    useEffect(() => {
        getProgramsAndTools();
        getWorkflows();
    }, []);

    const skillValue = {
        programAndTools,
        workflow,
        getProgramsAndTools,
        getWorkflows
    };
  return (
    <SkillContext.Provider value={skillValue}>
      {children}
    </SkillContext.Provider>
  )
}

export {SkillContext, SkillContextProvider}
