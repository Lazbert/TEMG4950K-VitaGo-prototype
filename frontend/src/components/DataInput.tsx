import { useState } from "react";
import { DropDownList } from "./DropDownList";
import { ReactComponent as IconDownArrow } from "@/assets/icons/IconDownArrow.svg";
import { ReactComponent as IconCalendar } from "@/assets/icons/IconCalendar.svg";
import Calendar from "react-calendar";
import cx from "classnames";

import "react-calendar/dist/Calendar.css";

interface DataInputProps {
  title: string;
  options?: Array<{ label: string }>;
  calendar?: boolean;
}

export const DataInput: React.FC<DataInputProps> = ({
  title,
  options,
  calendar,
}) => {
  const [date, setDate] = useState<Date | null>(null);
  const [showDropDownList, setShowDropDownList] = useState(false);
  const [selected, setSelected] = useState("");
  const formatDate = (date: Date | null) =>
    date && `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  return (
    <div className="relative flex flex-col gap-1">
      <div className="w-[323px] h-[60px] border border-primaryBlue px-[9px] py-[7px] rounded-[15px]">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <span className="text-[12px] font-light">{title}</span>
            {calendar ? (
              <input className="outline-none" />
            ) : (
              <span>{selected}</span>
            )}
            {/* <span>{calendar ? formatDate(date) : selected}</span> */}
          </div>
          <div className="pt-[2px]">
            {calendar ? (
              <IconCalendar
                className="w-[35.9px] h-[35px]"
                onClick={() => setShowDropDownList(!showDropDownList)}
              />
            ) : (
              <IconDownArrow
                className={cx("w-[40px] h-[40px]", {
                  "rotate-180": showDropDownList,
                })}
                onClick={() => setShowDropDownList(!showDropDownList)}
              />
            )}
          </div>
        </div>
      </div>
      {showDropDownList &&
        (calendar ? (
          <></>
        ) : (
          // <Calendar
          //   className="z-20 absolute top-[65px] rounded-[15px]"
          //   value={date}
          //   onChange={setDate as () => void}
          //   locale="en-GB"
          // />
          <DropDownList
            options={options}
            setSelected={setSelected}
            setShowDropDownList={setShowDropDownList}
          />
        ))}
    </div>
  );
};

export default DataInput;
