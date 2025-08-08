import React, { createContext, useEffect, useState } from 'react'

const CertificateContext = createContext();

const CertificateContextProvider = ({children}) => {
const [certificates, setCertificates] = useState([]);


const getCertificates = async() => {
    try {
        const response = await fetch('https://localhost:7156/api/Certificates');
        const data = await response.json();
        setCertificates(data);
    } catch (error) {
        console.error("Error fetching certificates:", error);
    }
}
useEffect(() => {
    getCertificates();
}, []);
const certificateValues = {
    certificates,
    setCertificates,
};

  return (
    <CertificateContext.Provider value={certificateValues}>
      {children}
    </CertificateContext.Provider>
  )
}

export  {CertificateContext, CertificateContextProvider}
