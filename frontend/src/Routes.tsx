import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DefaultLayout from "./layouts/DefaultLayout";
import ExplicitDataPage from "./pages/ExplicitDataPage";
import BookingPage from "./pages/BookingPage";
import BookingSelectedPage from "./pages/BookingSelectedPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import DeliveryPage from "./pages/DeliveryPage";
import PaymentPage from "./pages/PaymentPage";
import SuccessfulPaymentPage from "./pages/SuccessfulPaymentPage";
import SupplementsPage from "./pages/SupplementsPage";
import PastSupplementsPage from "./pages/PastSupplementsPage";
import HealthDashboardPage from "./pages/HealthDashboardPage";
import SymptomPage from "./pages/SymptomPage";

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
          <Route path="payment">
            <Route index element={<PaymentPage />} />
            <Route path="success" element={<SuccessfulPaymentPage />} />
          </Route>
        </Route>
        <Route path="supplements">
          <Route index element={<SupplementsPage />} />
          <Route path="history" element={<PastSupplementsPage />} />
        </Route>
        <Route path="dashboard" element={<HealthDashboardPage />} />
        <Route path="symptoms" element={<SymptomPage />} />
      </Route>
    </Routes>
  );
}
