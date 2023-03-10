import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { InformationPage } from "../pages/InformationPage";
import { ProjectsPage } from "../pages/projectsPage";
import { AbilitiesPage } from "../pages/AbilitiesPage";
import { ContactPage } from "../pages/ContactPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/informations" />} />
      <Route path="/" element={<MainPage />}>
        <Route path="informations" element={<InformationPage />} />
        <Route path="abilities" element={<AbilitiesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};
