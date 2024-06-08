import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import JobsLanding from "./components/jobs/JobsLanding";
import FreelancerLanding from "./components/Freelancers/FreelancerLanding";
import HrLanding from "./components/connectHRs/HrLanding";
import JobsDashBoard from "./components/jobs/JobsDashBoard";
import FreelancersDashboard from "./components/Freelancers/FreelancersDashboard";
import HrDashBoard from "./components/connectHRs/HrDashBoard";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/find-jobs" element={<JobsLanding />} />
          <Route path="/find-freelancers" element={<FreelancerLanding />} />
          <Route path="/connect-hrs" element={<HrLanding />} />
          <Route path="/jobsDashboard" element={<JobsDashBoard />} />
          <Route
            path="/FreelancersDashBoard"
            element={<FreelancersDashboard />}
          />
          <Route path="/HrDashBoard" element={<HrDashBoard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
