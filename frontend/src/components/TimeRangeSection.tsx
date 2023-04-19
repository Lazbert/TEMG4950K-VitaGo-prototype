import { ReactComponent as IconCalendar } from "@/assets/icons/IconCalendar.svg";

interface TimeRangeSectionProps {
  selectedDate: Date;
  setSelectedTimeRange: React.Dispatch<
    React.SetStateAction<{ from: string; to: string } | null>
  >;
}

const availableTimeRanges = [
  { from: "09:00", to: "11:00" },
  { from: "11:00", to: "13:00" },
  { from: "14:00", to: "15:30" },
  { from: "15:30", to: "17:00" },
];

export const TimeRangeSection: React.FC<TimeRangeSectionProps> = ({
  selectedDate,
  setSelectedTimeRange,
}) => {
  return (
    <div className="flex flex-col items-center gap-[25px]">
      <div className="-mt-[15px] flex flex-col">
        <span className="text-highlightBrick text-heading-2">
          Choose your preferred time range
        </span>
        <span>
          This is a 15-minute consultation session. Your doctor/healthcare
          professional will confirm the actual appointment time with you when
          your booking is successful
        </span>
      </div>
      <div className="flex items-center self-start">
        <IconCalendar className="-ml-[10px] w-[37px] h-[27px] fill-grey" />
        <span className="pt-[1px] font-bold text-primaryBlue">
          {formatDate(selectedDate)}
        </span>
      </div>
      {availableTimeRanges.map((timeRange, key) => {
        return (
          <button
            onClick={() => setSelectedTimeRange(timeRange)}
            key={key}
            className="flex justify-center items-center w-[288px] h-[63px] rounded-[20px] text-primaryBlue border border-primaryBlue focus:bg-primaryBlue focus:text-white"
          >
            <span>
              {timeRange.from} - {timeRange.to}
            </span>
          </button>
        );
      })}
    </div>
  );
};

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const formatMonth = month < 10 ? `0${month}` : month;
  const day = date.getDate();
  const formatDay = day < 10 ? `0${day}` : day;
  return `${year}/${formatMonth}/${formatDay}`;
};
