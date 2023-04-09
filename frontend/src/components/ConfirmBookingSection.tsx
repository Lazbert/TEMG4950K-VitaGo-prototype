import { useState } from "react";
import Agreement from "./Agreement";

interface ConfirmBookingSectionProps {
  selectedDate: Date;
  selectedTimeRange: { from: string; to: string };
}

export const ConfirmBookingSection: React.FC<ConfirmBookingSectionProps> = ({
  selectedDate,
  selectedTimeRange,
}) => {
  const [term1, setTerm1] = useState(false);
  const [term2, setTerm2] = useState(false);
  return (
    <div className="-mt-[15px] flex flex-col gap-[35px]">
      <div className="flex flex-col gap-[14px]">
        <div className="flex justify-between text-right">
          <span className="font-bold">Selected Date</span>
          <span>
            {formatDate(selectedDate)}
            <br />
            {intToDay(selectedDate.getDay())}
          </span>
        </div>
        <div className="w-full border border-grey/50" />
        <div className="flex justify-between">
          <span className="font-bold">Preferred Time Range</span>
          <span>
            {selectedTimeRange.from} - {selectedTimeRange.to}
          </span>
        </div>
      </div>
      <Agreement
        toggleOn={term1}
        setToggleOn={setTerm1}
        text="I have read and hereby agree to the Personal Information Collection Statement of the medical provider I have chosen for my video consultation"
      />
      <Agreement
        toggleOn={term2}
        setToggleOn={setTerm2}
        text="I object to the proposed use of my personal data for direct marketing purpose by the medical provider I have chosen for my video consultation as outlined in the medical provider’s Personal Information Collection Statement (if applicable)"
      />
    </div>
  );
};

export default ConfirmBookingSection;

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const formatMonth = month < 10 ? `0${month}` : month;
  const day = date.getDate();
  const formatDay = day < 10 ? `0${day}` : day;
  return `${year}/${formatMonth}/${formatDay}`;
};

const intToDay = (int: number) => {
  switch (int) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
};
