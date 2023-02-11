import { Routes, Route, Navigate } from "react-router-dom";
import { InformationPage } from "../pages/InformationPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="informations" />} />
      <Route path="informations" element={<InformationPage />} />
    </Routes>
  );
};
