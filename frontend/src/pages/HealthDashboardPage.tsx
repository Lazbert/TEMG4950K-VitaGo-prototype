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

const longDashboardItems: Array<LongDashboardItemProps> = [
  {
    Icon: IconTemperature,
    iconClassName: "w-[25px] h-[25px]",
    highlight: "26% above",
    highlightClassName: "text-abnormalRed",
    insight: "last week's average",
    stat: 37.3,
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
];

export default function HealthDashboardPage() {
  return (
    <>
      <TitleSection title="Health Dashboard" allowLastPage />
      <ContentSection className="h-full">
        <PersonalProfile
          ProfilePic={John}
          age={22}
          height={165}
          weight={67}
          name="John"
          imageClassName="h-[100px] w-[100px] self-center"
        />
        <div className="w-full border-t border-grey/30 my-[15px]"></div>
        <div className="flex flex-col gap-5 items-center">
          {longDashboardItems.map((item) => (
            <LongDashboardItem {...item} />
          ))}
        </div>
      </ContentSection>
    </>
  );
}
