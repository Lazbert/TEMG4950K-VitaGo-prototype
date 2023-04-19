import { useParams } from "react-router-dom";
import TitleSection from "../components/TitleSection";
import ContentSection from "../components/ContentSection";
import { originalSupplements } from "./utils";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SuppDescriptionItem from "../components/SuppDescriptionItem";

export default function SupplementTimerPage() {
  const { name } = useParams();
  const supp = originalSupplements.filter(
    (item) => item.suppInfo.name == name
  )[0];
  const { brand, displayClassName, frequency, timer, Display, description } =
    supp.suppInfo;

  return (
    <>
      <TitleSection title={name!} allowLastPage />
      <ContentSection className="h-full">
        <CircularProgressbarWithChildren
          value={timer == "Now" ? 86400 : getRemainingTime(timer)}
          strokeWidth={5}
          maxValue={86400}
          minValue={0}
          styles={buildStyles({
            textColor: "#D18F83",
            textSize: "16px",
            trailColor: "#E4FFD7",
            pathColor: "#8CD850",
          })}
        >
          <div className="flex flex-col gap-1 items-center">
            {Display && <Display className={displayClassName} />}
            {timer == "Now" ? (
              <span className="text-center px-16 text-highlightBrick text-heading-2 font-bold">
                Take the supplement now
              </span>
            ) : (
              <span className="font-medium text-heading-2">{timer}</span>
            )}
            <button className="underline text-[16px] text-primaryBlue">
              Reset
            </button>
          </div>
        </CircularProgressbarWithChildren>
        <div className="flex flex-col mt-3 gap-4">
          <SuppDescriptionItem
            title="Name & brand"
            value={`${name} - ${brand}`}
          />
          <SuppDescriptionItem title="Servings per container" value="30" />
          <SuppDescriptionItem title="Frequency" value={frequency} />
          <SuppDescriptionItem title="Description" value={description ?? ""} />
        </div>
      </ContentSection>
    </>
  );
}

const getRemainingTime = (timer: string) => {
  const hhmmss = timer.split(":").map((time) => parseInt(time));
  return hhmmss[0] * 3600 + hhmmss[1] * 60 + hhmmss[2];
};
