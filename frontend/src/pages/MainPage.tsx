import { useNavigate } from "react-router-dom";
import { ReactComponent as IconVitaGo } from "@/assets/icons/IconVitaGo.svg";
import { ReactComponent as IconDemo } from "@/assets/icons/IconDemo.svg";
import { useState } from "react";
import LockScreenPage from "./LockScreenPage";

const demoStages = [
  "Before 1st consultation",
  "After 1st consultation",
  "Update explicit data",
  "Abnormality detection",
  "Time to take supplements",
  // "New month of subscription",
];

type DemoStage = typeof demoStages[number];

export default function MainPage() {
  const nav = useNavigate();
  const [switchStageMode, setSwitchStageMode] = useState(false);
  const [currentDemoStage, setCurrentDemoStage] = useState<DemoStage>(
    "Before 1st consultation"
  );

  const demoStageHandler = () => {
    switch (currentDemoStage) {
      case "Before 1st consultation":
        return nav("/VitaGo");
      case "After 1st consultation":
        return nav("/VitaGo/recommendations");
    }
  };

  return (
    <div className="flex">
      {currentDemoStage != "Update explicit data" &&
      currentDemoStage != "Abnormality detection" &&
      currentDemoStage != "Time to take supplements" ? (
        <div className="pt-[320px] flex justify-center w-[393px] h-[852px] bg-cover md:bg-contain bg-no-repeat bg-[url('/images/VitaGo_IconPage.png')]">
          <button
            onClick={demoStageHandler}
            className="flex flex-col items-center"
          >
            <IconVitaGo className="h-[48px] w-[48px]" />
            <span className="font-semibold">Vital-Go</span>
          </button>
        </div>
      ) : (
        <LockScreenPage demoStage={currentDemoStage} />
      )}
      <div className="max-w-[360px] rounded-[20px] p-4 border border-highlightBrick bg-white absolute left-[20px] top-[450px]">
        <span className="font-medium">
          Current demo stage:{" "}
          <span className="text-orange-400 font-bold">{currentDemoStage}</span>
        </span>
      </div>
      <button
        onClick={() => setSwitchStageMode(true)}
        className="absolute left-[250px] bottom-[80px] bg-white rounded-[20px] p-2 flex flex-col items-center"
      >
        <IconDemo className="w-[50px] h-[50px]" />
        <span className="font-medium">Demo Setting</span>
      </button>
      {switchStageMode && (
        <div className="flex absolute w-[393px] h-[852px] bg-black/30">
          <div className="z-10 self-end bg-paleBlue border-t-2 border-grey/30 w-full h-fit py-8 flex flex-col gap-4 justify-end items-center">
            <span className="ml-8 text-heading-2 font-bold self-start">
              Select Stage:
            </span>
            {demoStages.map((stage, key) => (
              <button
                key={key}
                onClick={() => {
                  setCurrentDemoStage(stage);
                  setSwitchStageMode(false);
                }}
                className="rounded-[20px] min-w-[300px] p-4 font-bold text-white bg-highlightBrick"
              >
                {stage}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* <div className="rounded-[20px] self-center hidden md:visible w-[40%] mx-10 h-fit p-6 md:flex md:flex-col items-center gap-5 bg-paleBlue">
        <span className="w-full text-left text-[24px] underline font-bold">
          Demo-setting Panel
        </span>
        <div className="text-left text-heading-2 w-full">
          <span className="font-medium">Current stage: </span>
          <span className="text-orange-400 font-bold">{currentDemoStage}</span>
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
      </div> */}
    </div>
  );
}
