import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PersonalInfoContextProvider } from "./Contexts/PersonalInfoContext.jsx";
import { ContactContextProvider } from "./Contexts/ContactContext.jsx";
import { AboutContextProvider } from "./Contexts/AboutContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersonalInfoContextProvider>
      <ContactContextProvider>
        <AboutContextProvider>
          <App />
        </AboutContextProvider>
      </ContactContextProvider>
    </PersonalInfoContextProvider>
  </StrictMode>
);
