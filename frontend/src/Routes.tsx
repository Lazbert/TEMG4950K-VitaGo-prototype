import { Routes, Route } from "react-router-dom";
import IconPage from "./pages/IconPage";
import ExplicitDataPage from "./pages/ExplicitDataPage";

export default function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IconPage />} />
      <Route path="/data" element={<ExplicitDataPage />} />
    </Routes>
  );
}
