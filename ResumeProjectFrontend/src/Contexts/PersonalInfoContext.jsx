import React, { createContext, useEffect, useState } from 'react'

const PersonalInfoContext = createContext();

const PersonalInfoContextProvider = ({children}) => {
    const [personalInfos,setPersonalInfos] = useState([]);

    useEffect(() => {
        const getPersonalInfos = async() => {
            try {
                const response = await fetch("https://localhost:7156/api/PersonelInfos");
                const data = await response.json();
                setPersonalInfos(data);
            } catch (error) {
                console.error("Personal infos could not be fetched",error);
            }
        };
        getPersonalInfos();
    },[])

    const personalInfoValues = {
        personalInfos,
        setPersonalInfos
    }

  return <PersonalInfoContext.Provider value={personalInfoValues}>
        {children}
    </PersonalInfoContext.Provider>
  
}

export {PersonalInfoContext, PersonalInfoContextProvider}