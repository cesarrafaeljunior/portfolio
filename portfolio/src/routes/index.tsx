import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "../pages/MainLayout";
import { InformationPage } from "../pages/InformationPage";
import { ProjectsPage } from "../pages/projectsPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="informations" element={<InformationPage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
};
