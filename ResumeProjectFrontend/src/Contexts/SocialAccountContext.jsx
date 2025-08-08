import React, { createContext, useEffect, useState } from 'react'

const SocialAccountContext = createContext();

const SocialAccountContextProvider = ({children}) => {
    const [socialAccounts, setSocialAccounts] = useState([]);

    const getSocialAccounts = async () => {
            try {
                const response = await fetch("https://localhost:7156/api/SocialAccounts");
                const data = await response.json();
                setSocialAccounts(data);
            } catch (error) {   
                console.error("Social accounts could not be fetched", error);
            }
        }

    useEffect(() => {
        getSocialAccounts();
    },[]);
    
    const socialAccountValues = {
        socialAccounts,
        setSocialAccounts
    }
  return (
    <SocialAccountContext.Provider value={socialAccountValues}>
      {children}
    </SocialAccountContext.Provider>
  )
}

export {SocialAccountContext, SocialAccountContextProvider}
