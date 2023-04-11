import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DefaultLayout from "./layouts/DefaultLayout";
import ExplicitDataPage from "./pages/ExplicitDataPage";
import BookingPage from "./pages/BookingPage";
import BookingSelectedPage from "./pages/BookingSelectedPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import DeliveryPage from "./pages/DeliveryPage";

export default function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/VitaGo" element={<DefaultLayout />}>
        <Route index element={<ExplicitDataPage />} />
        <Route path="booking">
          <Route index element={<BookingPage />} />
          <Route path="calendar" element={<BookingSelectedPage />} />
        </Route>
        <Route path="recommendations">
          <Route index element={<RecommendationsPage />} />
          <Route path="delivery" element={<DeliveryPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
