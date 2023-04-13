import LockedTopSection from "@/assets/images/IOS-lockedTopSection.png";
import LockedBottomSection from "@/assets/images/IOS-lockedBottomSection.png";
import Notification from "../components/Notification";
import { useNavigate } from "react-router-dom";

export default function LockScreenPage() {
  const nav = useNavigate();
  return (
    <div className="relative pt-[329px] px-[9px] bg-gradient-slanted from-[#5A88E6] via-[#ECEBEF] to-[#A665D9]">
      <img className="absolute top-[93px] left-0" src={LockedTopSection} />
      <Notification
        onClick={() => nav("/VitaGo/", { state: { stage: "update" } })}
        text="Hi there! It's time to update your profile in VitaGo so that we can provide the best recommendations to you."
      />
      <img className="absolute bottom-0 left-0" src={LockedBottomSection} />
    </div>
  );
}
