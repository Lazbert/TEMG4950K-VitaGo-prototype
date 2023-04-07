import { useState } from "react";
import { ReactComponent as IconDownArrow } from "@/assets/icons/IconDownArrow.svg";
import { DropDownList } from "./DropDownList";
import cx from "classnames";

interface DataInputProps {
  title: string;
  options: Array<{ label: string }>;
  calendar?: boolean;
}

export const DataInput: React.FC<DataInputProps> = ({
  title,
  options,
  calendar,
}) => {
  const [showDropDownList, setShowDropDownList] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div className="relative flex flex-col gap-1">
      <div className="w-[323px] h-[60px] border border-primaryBlue px-[9px] py-[7px] rounded-[15px]">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <span className="text-[12px] font-light">{title}</span>
            <span>{selected}</span>
          </div>
          <div className="pt-[2px]">
            <IconDownArrow
              className={cx("w-[40px] h-[40px]", {
                "rotate-180": showDropDownList,
              })}
              onClick={() => setShowDropDownList(!showDropDownList)}
            />
          </div>
        </div>
      </div>
      {showDropDownList && (
        <DropDownList
          options={options}
          setSelected={setSelected}
          setShowDropDownList={setShowDropDownList}
        />
      )}
    </div>
  );
};

export default DataInput;
