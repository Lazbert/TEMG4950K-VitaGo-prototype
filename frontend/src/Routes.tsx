import { Routes, Route } from "react-router-dom";
import IconPage from "./pages/IconPage";
import DefaultLayout from "./layouts/DefaultLayout";
import ExplicitDataPage from "./pages/ExplicitDataPage";
import BookingPage from "./pages/BookingPage";
import BookingSelectedPage from "./pages/BookingSelectedPage";

export default function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IconPage />} />
      <Route path="/VitaGo" element={<DefaultLayout />}>
        <Route index element={<ExplicitDataPage />} />
        <Route path="booking">
          <Route index element={<BookingPage />} />
          <Route path="calendar" element={<BookingSelectedPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
