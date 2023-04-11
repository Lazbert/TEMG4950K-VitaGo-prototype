import { useNavigate } from "react-router-dom";
import { ReactComponent as IconVitaGo } from "@/assets/icons/IconVitaGo.svg";
import { useState } from "react";

const demoStages = [
  "Before 1st consultation",
  "After 1st consultation",
  "Update explicit data",
  "During subscription",
  "New month of subscription",
];

type DemoStage = typeof demoStages[number];

export default function MainPage() {
  const nav = useNavigate();
  const [currentDemoStage, setCurrentDemoStage] = useState<DemoStage>(
    "Before 1st consultation"
  );

  return (
    <div className="flex">
      <div className="flex-1 bg-no-repeat bg-[url('/images/VitaGo_IconPage.png')]">
        <button
          onClick={() => nav("/VitaGo")}
          className="absolute top-[319px] left-[172px]"
        >
          <IconVitaGo className="h-[48px] w-[48px]" />
          <span className="font-semibold">VitaGo</span>
        </button>
      </div>
      <div className="self-center invisible md:visible w-[40%] h-fit mr-10 p-6 flex flex-col items-center gap-5 bg-paleBlue">
        <span className="w-full text-left text-[24px] underline font-bold">
          Demo-setting Panel
        </span>
        <div className="text-left text-heading-2 font-bold w-full">
          <span>Current stage: </span>
          <span className="text-orange-400">{currentDemoStage}</span>
        </div>
        {demoStages.map((stage, key) => (
          <button
            key={key}
            className="text-white font-medium p-4 rounded-[20px] min-w-[300px] bg-highlightBrick/80 hover:opacity-80"
            onClick={() => setCurrentDemoStage(stage)}
          >
            {stage}
          </button>
        ))}
      </div>
    </div>
  );
}
