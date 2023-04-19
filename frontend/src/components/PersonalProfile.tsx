import cx from "classnames";
import { useState } from "react";
import { ReactComponent as John } from "@/assets/images/John.svg";

interface PersonalProfileProps {
  name: string;
  ProfilePic: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  imageClassName?: string;
  age: number;
  height: number;
  weight: number;
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PersonalProfile: React.FC<PersonalProfileProps> = ({
  name,
  ProfilePic,
  imageClassName,
  age,
  height,
  weight,
  showOptions,
  setShowOptions,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <span className="text-highlightBrick text-[24px]">
          Welcome back, <span className="font-bold">{name}</span>
        </span>
        <button
          onClick={() => setShowOptions(!showOptions)}
          className={cx(
            "pb-2 w-[33px] text-center rounded-full border border-primaryBlue",
            { "text-white bg-primaryBlue": showOptions }
          )}
        >
          ...
        </button>
      </div>
      <ProfilePic className={imageClassName} />
      <div className="flex items-center justify-center gap-3">
        <span className="text-[14px]">Age {age}</span>
        <div className="w-[10px] h-[10px] rounded-full bg-highlightBrick" />
        <span className="text-[14px]">Height {height} cm</span>
        <div className="w-[10px] h-[10px] rounded-full bg-highlightBrick" />
        <span className="text-[14px]">Weight {weight} kg</span>
      </div>
    </div>
  );
};
