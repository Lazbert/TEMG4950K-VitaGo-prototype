import { useState } from "react";
import ContentSection from "../components/ContentSection";
import TitleSection from "../components/TitleSection";
import SupplementDisplay, {
  SupplementDisplayProps,
} from "../components/SupplementDisplay";
import { ReactComponent as IconConsultButton } from "@/assets/icons/IconConsultButton.svg";
import { ReactComponent as Blackmores } from "@/assets/images/Blackmores.svg";
import { ReactComponent as NordicNaturals } from "@/assets/images/NordicNaturals.svg";
import { ReactComponent as NatureMade } from "@/assets/images/NatureMade.svg";
import { ReactComponent as BioGaia } from "@/assets/images/BioGaia.svg";
import { ReactComponent as NaturesWay } from "@/assets/images/NaturesWay.svg";
import { ReactComponent as IconRemove } from "@/assets/icons/IconRemove.svg";
import { ReactComponent as IconTimer } from "@/assets/icons/IconTimer.svg";

const supplements: Array<Pick<SupplementDisplayProps, "suppInfo">> = [
  {
    suppInfo: {
      name: "Multivitamins",
      Display: Blackmores,
      displayClassName: "w-[80px] h-[119px]",
      frequency: "Daily, 1 time a day",
      timer: "Now",
    },
  },
  {
    suppInfo: {
      name: "Omega-3",
      Display: NordicNaturals,
      displayClassName: "w-[85px] h-[122px]",
      frequency: "Daily, 1 time a day",
      timer: "Now",
    },
  },
  {
    suppInfo: {
      name: "Vitamin D",
      Display: NatureMade,
      displayClassName: "w-[76px] h-[131px]",
      frequency: "Daily, 1 time a day",
      timer: "15:00:00",
    },
  },
  {
    suppInfo: {
      name: "Probiotics",
      Display: BioGaia,
      displayClassName: "w-[101px] h-[121px]",
      frequency: "Daily, 1 time a day",
      timer: "15:00:00",
    },
  },
  {
    suppInfo: {
      name: "Calcium",
      Display: NaturesWay,
      displayClassName: "w-[77px] h-[129px]",
      frequency: "Daily, 1 time a day",
      timer: "14:00:00",
    },
  },
];

export default function SupplementsPage() {
  const [onConfirm, setOnConfirm] = useState(false);
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selectingSupp, setSelectingSupp] = useState<Array<string>>([]);
  const defaultSupp: Array<{ name: string; isSelected: boolean }> =
    supplements.map(({ suppInfo }) => {
      const { name } = suppInfo;
      return { name: name, isSelected: false };
    });
  const [confirmSelectedSupp, setConfirmSelectedSupp] = useState<
    Array<{
      name: string;
      isSelected: boolean;
    }>
  >(defaultSupp);

  const confirmSelectionHandler = () => {
    // selectingSupp.forEach((name) => {
    //   const updated = confirmSelectedSupp;
    //   updated.map((supp) => {
    //     if (supp.name == name) {
    //       supp.isSelected = true;
    //     }
    //   });
    //   setConfirmSelectedSupp(updated);
    // });
  };

  return (
    <>
      <TitleSection title="Supplements" allowLastPage />
      <ContentSection className="h-full px-[15px]" overflow>
        <div className="flex flex-col px-[19px]">
          <div className="flex justify-between items-center">
            <span className="text-heading-2 font-bold">2023 March</span>
            <div className="flex gap-[5px]">
              {isSelectMode ? (
                <button
                  onClick={() => {
                    setOnConfirm(true);
                    setIsSelectMode(false);
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
              <button className="pb-2 w-[33px] text-center rounded-full border border-primaryBlue">
                ...
              </button>
            </div>
          </div>
          <span className="text-highlightBrick text-[16px]">
            Remember to take the following supplements on time:
          </span>
        </div>
        <div className="mt-[15px] grid grid-cols-2 gap-[15px]">
          {supplements.map((supp, ind) => {
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
            <button className="flex gap-[5px] items-center">
              <IconRemove className="w-[40px] h-[40px]" />
              <span className="text-heading-2">Remove selected</span>
            </button>
            <div className="border" />
            <button className="flex gap-[5px] items-center">
              <IconTimer className="w-[40px] h-[40px]" />
              <span className="text-heading-2">Reset timers of selected</span>
            </button>
          </div>
          <button
            onClick={() => setOnConfirm(false)}
            className="w-[363px] h-[58px] bg-white text-center rounded-[20px]"
          >
            <span className="text-heading-2 font-bold text-primaryBlue">
              Cancel
            </span>
          </button>
        </div>
      )}
    </>
  );
}
