import React, { createContext } from 'react'

const PersonalInfoContext = createContext();

const PersonalInfoContextProvider = ({children}) => {
    const [PersonalInfos, setPersonalInfos] = useState([]);
  return (
    <div>
      
    </div>
  )
}

export default {PersonalInfoContext,PersonalInfoContextProvider}
