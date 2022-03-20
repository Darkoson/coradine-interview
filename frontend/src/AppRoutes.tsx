import React, { FC } from "react";
import ApplicantsPage from "./pages/applicants/ApplicantsPage";
import CandidateConfirmationPage from "./pages/candidate/CandidateConfirmationPage";
import InterviewPage from "./pages/interview/InterviewPage";
import LandingPage from "./pages/landing/LandingPage";
import SettingsPage from "./pages/settings/SettingsPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecuredPages from "./pages/SecuredPages";

const AppRoutes: FC = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/candidate-preparation"
          element={<CandidateConfirmationPage />}
        />

        <Route path="/usr" element={<SecuredPages />}>
          <Route path={"applicants"} element={<ApplicantsPage />} />

          <Route path={"interview"} element={<InterviewPage />} />
          <Route path={"settings"} element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default AppRoutes;
