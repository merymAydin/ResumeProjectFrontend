import React, { createContext, useEffect, useState } from 'react'

const ExperienceContext = createContext();

const ExperienceContextProvider = ({children}) => {

    const [experiences,setExperiences] = useState([]);

    const getExperiences = async() => {
        try {
            const response = await fetch("https://localhost:7156/api/Experiences");
            const data = await response.json();
            setExperiences(data);
        } catch (error) {   
            console.error("Experiences could not be fetched", error);
        }
    }

    useEffect(() => {
        getExperiences();
    },[]);

    const experienceValues = {
        experiences,
        setExperiences
    }

  return <ExperienceContext.Provider value={experienceValues}>
    {children}
  </ExperienceContext.Provider>
}

export  {ExperienceContext, ExperienceContextProvider}