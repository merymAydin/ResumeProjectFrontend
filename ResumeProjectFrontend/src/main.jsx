import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PersonalInfoContextProvider } from "./Contexts/PersonalInfoContext.jsx";
import { ContactContextProvider } from "./Contexts/ContactContext.jsx";
import { AboutContextProvider } from "./Contexts/AboutContext.jsx";
import { SocialAccountContextProvider } from "./Contexts/SocialAccountContext.jsx";
import { ExperienceContextProvider } from "./Contexts/ExperienceContext.jsx";
import { EducationContextProvider } from "./Contexts/EducationContext.jsx";
import { SkillContextProvider } from "./Contexts/SkillContextProvider.jsx";
import Workflow from "./Components/Workflow.jsx";
import { InterestContextProvider } from "./Contexts/InterestContext.jsx";
import { CertificateContext, CertificateContextProvider } from "./Contexts/CertificateContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersonalInfoContextProvider>
      <ContactContextProvider>
        <AboutContextProvider>
          <SocialAccountContextProvider> 
            <ExperienceContextProvider>
              <EducationContextProvider>
                <SkillContextProvider>
                  <InterestContextProvider>
                    <CertificateContextProvider>
                      <App />
                    </CertificateContextProvider>
                  </InterestContextProvider>
                </SkillContextProvider>
              </EducationContextProvider>
            </ExperienceContextProvider>
          </SocialAccountContextProvider>
        </AboutContextProvider>
      </ContactContextProvider>
    </PersonalInfoContextProvider>
  </StrictMode>
);
