import { useLocation, useNavigate } from "react-router-dom";
import TitleSection from "../components/TitleSection";
import ContentSection from "../components/ContentSection";
import DoctorInfo from "../components/DoctorInfo";
import Calendar from "react-calendar";

import "./bookingCalendar.css";
import { ContinueAndCancel } from "../components/ContinueAndCancel";
import { useState } from "react";
import { TimeRangeSection } from "../components/TimeRangeSection";
import ConfirmBookingSection from "../components/ConfirmBookingSection";

const available_dates = [1, 3, 8, 10, 15, 17];

interface TimeRange {
  from: string;
  to: string;
}

export default function BookingSelectedPage() {
  const nav = useNavigate();
  const [bookingStage, setBookingStage] = useState<
    "calendar" | "time" | "confirm"
  >("calendar");
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<Date | null>(
    null
  );
  const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange | null>(
    null
  );

  const state: {
    fullname: string;
    nickname: string;
    medCenter: string;
    location: string;
  } = useLocation().state;

  const handleBookingStage = () => {
    if (bookingStage == "calendar" && selectedCalendarDate) {
      setBookingStage("time");
      console.log("switched to time selection");
    } else if (bookingStage == "time" && selectedTimeRange) {
      setBookingStage("confirm");
      console.log("switched to confirm booking");
    }
  };

  return (
    <>
      <TitleSection
        title={
          bookingStage == "confirm"
            ? "Your Booking Request"
            : "Book an appointment"
        }
        allowLastPage
      />
      <ContentSection className="h-full mb-[198px] pt-[44px] overflow-auto scrollbar-hide shadow-xl">
        <div className="flex flex-col gap-[50px]">
          <DoctorInfo {...state} />
          {bookingStage == "calendar" && (
            <Calendar
              locale="en-GB"
              tileDisabled={({ date }) =>
                !available_dates.includes(date.getDate())
              }
              onChange={(date) => setSelectedCalendarDate(date as Date)}
            />
          )}
          {bookingStage == "time" && selectedCalendarDate && (
            <TimeRangeSection
              selectedDate={selectedCalendarDate}
              setSelectedTimeRange={setSelectedTimeRange}
            />
          )}
          {bookingStage == "confirm" &&
            selectedCalendarDate &&
            selectedTimeRange && (
              <ConfirmBookingSection
                selectedDate={selectedCalendarDate}
                selectedTimeRange={selectedTimeRange}
              />
            )}
        </div>
      </ContentSection>
      <ContinueAndCancel
        onContinue={handleBookingStage}
        onCancel={() => nav("/VitaGo/booking")}
      />
    </>
  );
}
