import React, { createContext, useEffect, useState } from 'react'

const ContactContext = createContext();

const ContactContextProvider = ({children}) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const getContacts = async() => {
            try {
                const response = await fetch("https://resume-project-agsn.onrender.com");
                const data = await response.json();
                setContacts(data);
            } catch (error) {
                console.error("Contact informations could not be fetched",error);
            }
        }
        getContacts();
    },[]);

    const contactValues = {
        contacts,
        setContacts
    }

  return <ContactContext.Provider value={contactValues}>
    {children}
  </ContactContext.Provider>
}

export  { ContactContext, ContactContextProvider }
