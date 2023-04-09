import { useLocation } from "react-router-dom";
import TitleSection from "../components/TitleSection";
import ContentSection from "../components/ContentSection";
import DoctorInfo from "../components/DoctorInfo";
import Calendar from "react-calendar";

import "./bookingCalendar.css";
import { ContinueAndCancel } from "../components/ContinueAndCancel";
import { useState } from "react";

const available_dates = [1, 3, 8, 10, 15, 17];

export default function BookingCalendarPage() {
  const [bookingStage, setBookingStage] = useState<
    "calendar" | "time" | "confirm"
  >("calendar");
  const state: {
    fullname: string;
    nickname: string;
    medCenter: string;
    location: string;
  } = useLocation().state;
  console.log(state);
  return (
    <>
      <TitleSection title="Book an appointment" allowLastPage />
      <ContentSection className="h-full mb-[198px] pt-[44px] overflow-auto scrollbar-hide shadow-xl">
        <div className="flex flex-col gap-[50px]">
          <DoctorInfo {...state} />
          <Calendar
            locale="en-GB"
            tileDisabled={({ date }) =>
              !available_dates.includes(date.getDate())
            }
          />
        </div>
      </ContentSection>
      <ContinueAndCancel to="time" back="booking" />
    </>
  );
}
