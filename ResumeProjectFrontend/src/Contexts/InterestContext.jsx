import React, { createContext, useEffect, useState } from 'react'

const InterestContext = createContext();

const InterestContextProvider = ({children}) => {
    const [interests, setInterests] = useState([]);
    const getInterests = async() => {
        try {
            const response = await fetch("https://localhost:7156/api/Interests");
            const data = await response.json();
            setInterests(data);
        } catch (error) {
            console.error("Interests could not be fetched", error);
        }
    }
    useEffect(() => {
        getInterests();
    }, []);

    const interestValues = {
        interests,
        setInterests
    }
  return (
    <InterestContext.Provider value={interestValues}>
      {children}
    </InterestContext.Provider>
  )
}

export {InterestContext, InterestContextProvider}
