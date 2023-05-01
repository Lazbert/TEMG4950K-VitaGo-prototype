import ContentSection from "../components/ContentSection";
import {
  LongDashboardItem,
  LongDashboardItemProps,
} from "../components/LongDashboardItem";
import { PersonalProfile } from "../components/PersonalProfile";
import TitleSection from "../components/TitleSection";
import { ReactComponent as John } from "@/assets/images/John.svg";
import { ReactComponent as IconTemperature } from "@/assets/icons/IconTemperature.svg";
import { ReactComponent as IconExercise } from "@/assets/icons/IconExercise.svg";
import { ReactComponent as IconSteps } from "@/assets/icons/IconSteps.svg";
import { ReactComponent as IconSleep } from "@/assets/icons/IconSleep.svg";
import { ReactComponent as IconHeartRate } from "@/assets/icons/IconHeartRate.svg";
import { ReactComponent as IconDashboard } from "@/assets/icons/IconDashboard.svg";
import { ReactComponent as IconBloodSugar } from "@/assets/icons/IconBloodSugar.svg";
import {
  ShortDashboardItem,
  ShortDashboardItemProps,
} from "../components/ShortDashboardItem";
import ConsultButton from "../components/ConsultButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cx from "classnames";

const longDashboardItems: Array<LongDashboardItemProps> = [
  {
    Icon: IconTemperature,
    iconClassName: "w-[25px] h-[25px]",
    highlight: "26% above",
    highlightClassName: "text-abnormalRed",
    insight: "last week's average",
    stat: 37.8,
    statClassName: "text-abnormalRed",
    title: "Temperature",
    unit: "°C",
  },
  {
    Icon: IconExercise,
    iconClassName: "w-[25px] h-[25px]",
    highlight: "48% lower",
    highlightClassName: "text-abnormalRed",
    insight: "than last week's average",
    stat: 12,
    statClassName: "text-abnormalRed",
    title: "Exercise",
    unit: "minutes",
  },
  {
    Icon: IconSteps,
    iconClassName: "w-[25px] h-[25px]",
    highlight: "15% lower",
    highlightClassName: "text-mediumYellow",
    insight: "than last week's average",
    stat: 5000,
    statClassName: "text-mediumYellow",
    title: "Steps",
    unit: "Steps",
  },
  {
    Icon: IconBloodSugar,
    iconClassName: "w-[30px] h-[30px] pb-1 mr-2",
    highlight: "10% higher",
    highlightClassName: "text-abnormalRed",
    insight: "than last week's average",
    stat: 130,
    statClassName: "text-abnormalRed",
    title: "Blood Sugar Level",
    unit: "mg/dL",
  },
];

const shortDashboardItem: Array<ShortDashboardItemProps> = [
  {
    title: "Sleep",
    Icon: IconSleep,
    iconClassName: "w-[30px] h-[33px]",
    stat: 7.8,
    statClassName: "text-normalGreen",
    unit: "hours",
  },
  {
    title: "Heart Rate",
    Icon: IconHeartRate,
    iconClassName: "w-[30px] h-[33px]",
    stat: 85,
    statClassName: "text-normalGreen",
    unit: "bpm",
  },
];

export default function HealthDashboardPage() {
  const nav = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <TitleSection title="Health Dashboard" allowLastPage />
      <ContentSection
        className={cx("h-full", { "overflow-clip": showOptions })}
        overflow={!showOptions}
      >
        <PersonalProfile
          ProfilePic={John}
          age={35}
          height={165}
          weight={67}
          name="John"
          imageClassName="h-[100px] w-[100px] self-center rounded-full"
          showOptions={showOptions}
          setShowOptions={setShowOptions}
        />
        <div className="w-full border-t border-grey/30 my-[15px]"></div>
        <div className="flex flex-col gap-5 items-center">
          {longDashboardItems.map((item, key) => (
            <LongDashboardItem key={key} {...item} />
          ))}
        </div>
        <div className="flex flex-wrap gap-[18px] mt-5">
          {shortDashboardItem.map((item, key) => (
            <ShortDashboardItem key={key} {...item} />
          ))}
        </div>
      </ContentSection>
      <ConsultButton />
      {showOptions && (
        <div className="top-[220px] right-[30px] rounded-[20px] absolute p-3 gap-[10px] border border-primaryBlue bg-white flex flex-col justify-center items-center">
          <button
            onClick={() => nav("/VitaGo/supplements")}
            className="flex items-center gap-[5px]"
          >
            <IconDashboard className="w-[30px] h-[30px]" />
            <span className="text-[16px]">Health Dashboard</span>
          </button>
        </div>
      )}
    </>
  );
}
