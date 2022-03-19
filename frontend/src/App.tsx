// import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import MenuLinks from "./components/navigation/menus";
import Navigation from "./components/navigation/Navigation";
import ApplicationPage from "./pages/applicants/ApplicationPage";
import CandidateConfirmationPage from "./pages/candidate/CandidateConfirmationPage";
import InterviewPage from "./pages/interview/InterviewPage";
import LandingPage from "./pages/landing/LandingPage";
import SettingPage from "./pages/settings/SettingPage";

// import logoMobile from "./logo.png";
// import logoDesktop from "./logo-coradine.png";

function App() {
  return (
    <>
      <BrowserRouter>
    

        <Navigation />

        <Routes>
          <Route path={MenuLinks.landing.path} element={<LandingPage />} />
          <Route
            path={MenuLinks.candidateProfile.path}
            element={<CandidateConfirmationPage />}
          />
          <Route
            path={MenuLinks.applicants.path}
            element={<ApplicationPage />}
          />
          <Route path={MenuLinks.interview.path} element={<InterviewPage />} />
          <Route path={MenuLinks.settings.path} element={<SettingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
