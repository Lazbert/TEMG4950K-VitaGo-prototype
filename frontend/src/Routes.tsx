import { Routes, Route } from "react-router-dom";
import IconPage from "./pages/IconPage";
import ExplicitDataPage from "./pages/ExplicitDataPage";
import DefaultLayout from "./layouts/DefaultLayout";

export default function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IconPage />} />
      <Route path="/VitaGo" element={<DefaultLayout />}>
        <Route index element={<ExplicitDataPage />} />
      </Route>
    </Routes>
  );
}
