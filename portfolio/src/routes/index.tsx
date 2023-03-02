import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { InformationPage } from "../pages/InformationPage";
import { ProjectsPage } from "../pages/projectsPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<MainPage />}>
        <Route path="informations" element={<InformationPage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
};
