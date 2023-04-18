import { useState } from "react";
import ContentSection from "../components/ContentSection";
import TitleSection from "../components/TitleSection";
import SupplementDisplay, {
  SupplementDisplayProps,
} from "../components/SupplementDisplay";
import { ReactComponent as IconConsultButton } from "@/assets/icons/IconConsultButton.svg";
import { ReactComponent as IconRemove } from "@/assets/icons/IconRemove.svg";
import { ReactComponent as IconTimer } from "@/assets/icons/IconTimer.svg";
import { ReactComponent as IconDashboard } from "@/assets/icons/IconDashboard.svg";
import { ReactComponent as IconPastSupplements } from "@/assets/icons/IconPastSupplements.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { originalSupplements } from "./utils";
import cx from "classnames";

export default function SupplementsPage() {
  const nav = useNavigate();
  const state: { suppList: Array<string> } = useLocation().state;
  const [onConfirm, setOnConfirm] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selectingSupp, setSelectingSupp] = useState<Array<string>>([]);
  const [suppList, setSuppList] = useState(
    state.suppList
      ? originalSupplements.filter((supp) =>
          state.suppList.includes(supp.suppInfo.name)
        )
      : originalSupplements
  );
  const [droppedSupp, setDroppedSupp] = useState<Array<string>>([]);

  const setDefaultStates = () => {
    setOnConfirm(false);
    setIsSelectMode(false);
    setSelectingSupp([]);
  };

  const removeSelectedHandler = () => {
    const updated = suppList.filter(
      (supp) => !selectingSupp.includes(supp.suppInfo.name)
    );
    const dropped = suppList
      .filter((supp) => selectingSupp.includes(supp.suppInfo.name))
      .map((item) => item.suppInfo.name);
    setSuppList(updated);
    setDroppedSupp(dropped);
    setDefaultStates();
  };

  const resetSelectedTimerHandler = () => {
    const updated = suppList;
    updated.forEach((supp) => {
      if (selectingSupp.includes(supp.suppInfo.name)) {
        supp.suppInfo.timer = "23:59:59";
      }
    });
    setSuppList(updated);
    setDefaultStates();
  };

  return (
    <>
      <TitleSection title="Supplements" allowLastPage />
      <ContentSection className="h-full !px-[15px]" overflow>
        <div className="flex flex-col px-[19px]">
          <div className="flex justify-between items-center">
            <span className="text-heading-2 font-bold">2023 March</span>
            <div className="flex gap-[5px]">
              {isSelectMode ? (
                <button
                  onClick={() => {
                    if (selectingSupp.length == 0) {
                      setIsSelectMode(false);
                      return;
                    }
                    setOnConfirm(true);
                  }}
                  className="bg-primaryGreen py-1 min-w-[85px] rounded-[20px] text-white"
                >
                  Confirm
                </button>
              ) : (
                <button
                  onClick={() => setIsSelectMode(true)}
                  className="border border-primaryBlue py-1 min-w-[85px] rounded-[20px]"
                >
                  Select
                </button>
              )}
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
          </div>
          <span className="text-highlightBrick text-[16px]">
            Remember to take the following supplements on time:
          </span>
        </div>
        <div className="mt-[15px] grid grid-cols-2 gap-[15px]">
          {state?.suppList
            ? suppList
                .filter((supp) => state.suppList.includes(supp.suppInfo.name))
                .map((supp, ind) => {
                  const isEvenRow = Math.floor(ind / 2) % 2 == 0;
                  return (
                    <SupplementDisplay
                      key={ind}
                      isSelectMode={isSelectMode}
                      selectingSupp={selectingSupp}
                      setSelectingSupp={setSelectingSupp}
                      isEvenRow={isEvenRow}
                      {...supp}
                    />
                  );
                })
            : suppList.map((supp, ind) => {
                const isEvenRow = Math.floor(ind / 2) % 2 == 0;
                return (
                  <SupplementDisplay
                    key={ind}
                    isSelectMode={isSelectMode}
                    selectingSupp={selectingSupp}
                    setSelectingSupp={setSelectingSupp}
                    isEvenRow={isEvenRow}
                    {...supp}
                  />
                );
              })}
        </div>
      </ContentSection>
      <button className="shadow-xl shadow-grey/30 absolute right-[15px] bottom-[15px] w-[75px] h-[75px] rounded-full bg-highlightBrick">
        <IconConsultButton className="mx-auto my-auto h-[57px] w-[57px]" />
      </button>
      {onConfirm && (
        <div className="inset-0 absolute bg-black/80 h-screen w-screen flex flex-col justify-end items-center pb-[15px] gap-[10px]">
          <div className="rounded-[30px] bg-white w-[363px] flex flex-col gap-[11px] p-[18px]">
            <button
              onClick={removeSelectedHandler}
              className="flex gap-[5px] items-center"
            >
              <IconRemove className="w-[40px] h-[40px]" />
              <span className="text-heading-2">Remove selected</span>
            </button>
            <div className="border" />
            <button
              onClick={resetSelectedTimerHandler}
              className="flex gap-[5px] items-center"
            >
              <IconTimer className="w-[40px] h-[40px]" />
              <span className="text-heading-2">Reset timers of selected</span>
            </button>
          </div>
          <button
            onClick={() => {
              setOnConfirm(false);
              setIsSelectMode(false);
            }}
            className="w-[363px] h-[58px] bg-white text-center rounded-[20px]"
          >
            <span className="text-heading-2 font-bold text-primaryBlue">
              Cancel
            </span>
          </button>
        </div>
      )}
      {showOptions && (
        <div className="top-[220px] right-[30px] rounded-[20px] absolute p-3 gap-[10px] border border-primaryBlue bg-white flex flex-col justify-center items-center">
          <button className="flex items-center gap-[5px]">
            <IconDashboard className="w-[30px] h-[30px]" />
            <span className="text-[16px]">Health Dashboard</span>
          </button>
          <div className="border-t w-[95%] border-primaryBlue"></div>
          <button
            onClick={() => {
              nav("history", {
                state: {
                  remaining: suppList.map((supp) => supp.suppInfo.name),
                },
              });
            }}
            className="flex items-center gap-[5px]"
          >
            <IconPastSupplements className="w-[39px] h-[39px]" />
            <span className="text-[16px]">Past Supplements</span>
          </button>
        </div>
      )}
    </>
  );
}
