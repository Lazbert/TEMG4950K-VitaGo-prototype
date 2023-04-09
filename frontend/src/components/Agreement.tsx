import { ReactComponent as IconToggleOff } from "@/assets/icons/IconToggleOff.svg";
import { ReactComponent as IconToggleOn } from "@/assets/icons/IconToggleOn.svg";
import { useState } from "react";

interface AgreementProps {
  text: string;
  toggleOn: boolean;
  setToggleOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Agreement: React.FC<AgreementProps> = ({
  text,
  toggleOn,
  setToggleOn,
}) => {
  return (
    <div className="flex justify-between items-start gap-[35px]">
      <span>{text}</span>
      <button className="pt-[6px]" onClick={() => setToggleOn(!toggleOn)}>
        {toggleOn ? (
          <IconToggleOn className="w-[51px] h-[33px]" />
        ) : (
          <IconToggleOff className="w-[51px] h-[33px]" />
        )}
      </button>
    </div>
  );
};

export default Agreement;
