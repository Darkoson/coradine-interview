// import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import "./App.css";
import MenuLinks from "./components/navigation/menus";
import Navigation from "./components/navigation/Navigation";
import ApplicantsPage from "./pages/applicants/ApplicantsPage";
import CandidateConfirmationPage from "./pages/candidate/CandidateConfirmationPage";
import InterviewPage from "./pages/interview/InterviewPage";
import LandingPage from "./pages/landing/LandingPage";
import SettingsPage from "./pages/settings/SettingsPage";

// import logoMobile from "./logo.png";
// import logoDesktop from "./logo-coradine.png";

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          <Route
            path="/candidate-preparation"
            element={<CandidateConfirmationPage />}
          />

          <Route path="/usr" element={<Home />}>
            <Route
              path={"applicants"}
              element={<ApplicantsPage />}
            />

            <Route
              path={"interview"}
              element={<InterviewPage />}
            />
            <Route
              path={"settings"}
              element={<SettingsPage />}
            />
          </Route>

          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Home = () => (
  <>
    <div className="home-bg">
      <Navigation />
    home is here
      <Outlet />
    </div>
  </>
);

export default App;
