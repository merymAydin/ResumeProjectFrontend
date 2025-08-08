import React, { createContext, useEffect, useState } from 'react'

const EducationContext = createContext();

const EducationContextProvider = ({children}) => {
    const [educations, setEducations] = useState([]);
    const getEducations = async () => {
        try {
            const response = await fetch("https://localhost:7156/api/Educations");
            const data = await response.json();
            setEducations(data);
        } catch (error) {
            console.error("Educations could not be fetched", error);
        }
    }
    useEffect(() => {
        getEducations();
    },[]);

    const educationValues = {
        educations,
        setEducations
    }
  return (
    <EducationContext.Provider value={educationValues}>
      {children}
    </EducationContext.Provider>
  )
}

export {EducationContext, EducationContextProvider}
