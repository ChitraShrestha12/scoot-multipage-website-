import { Route, Routes } from "react-router";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import LocationPage from "./pages/LocationPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="location" element={<LocationPage />} />
      </Routes>
    </>
  );
}
