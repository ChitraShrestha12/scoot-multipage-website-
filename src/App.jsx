import { Route, Routes } from "react-router";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import LocationPage from "./pages/LocationPage";
import HomePage from "./pages/HomePage";
import JobInfo from "./pages/JobInfo";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="location" element={<LocationPage />} />
        <Route path="careers">
          <Route index element={<CareersPage />} />
          <Route path=":jobInfo" element={<JobInfo />} />
        </Route>
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}
