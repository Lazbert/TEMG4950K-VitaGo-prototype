import LockedTopSection from "@/assets/images/IOS-lockedTopSection.png";
import LockedBottomSection from "@/assets/images/IOS-lockedBottomSection.png";
import Notification from "../components/Notification";
import { useNavigate } from "react-router-dom";
import cx from "classnames";

export default function LockScreenPage({
  demoStage,
  className,
}: {
  demoStage: string;
  className?: string;
}) {
  const nav = useNavigate();
  const { text, navTo } = getTextAndNavFromStage(demoStage);
  return (
    <div
      className={cx(
        "relative pt-[329px] px-[9px] bg-gradient-slanted from-[#5A88E6] via-[#ECEBEF] to-[#A665D9]",
        className
      )}
    >
      <img className="absolute top-[93px] left-0" src={LockedTopSection} />
      <Notification
        onClick={() =>
          nav(navTo, { state: navTo == "/VitaGo" ? { stage: "update" } : {} })
        }
        text={text}
      />
      <img className="absolute bottom-0 left-0" src={LockedBottomSection} />
    </div>
  );
}

const getTextAndNavFromStage = (
  demoStage: string
): { text: string; navTo: string } => {
  switch (demoStage) {
    case "Update explicit data":
      return {
        text: "Hi there! It's time to update your profile in Vital-Go so that we can provide the best recommendations to you.",
        navTo: "/VitaGo",
      };
    case "Abnormality detection":
      return {
        text: "Our system has detected abnormalities through your wearable device. Don’t ignore your health, take proactive measures today.",
        navTo: "/VitaGo/dashboard",
      };
    case "Time to take supplements":
      return {
        text: "Hi there! It's time to take your daily dose of supplements to support your health and well-being. Remember to take them with a meal for optimal absorption.",
        navTo: "/VitaGo/supplements",
      };
    default:
      return { text: "", navTo: "" };
  }
};
