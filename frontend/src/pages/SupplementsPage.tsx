import ContentSection from "../components/ContentSection";
import TitleSection from "../components/TitleSection";
import SupplementDisplay, {
  SupplementDisplayProps,
} from "../components/SupplementDisplay";
import { ReactComponent as Blackmores } from "@/assets/images/Blackmores.svg";
import { ReactComponent as NordicNaturals } from "@/assets/images/NordicNaturals.svg";
import { ReactComponent as NatureMade } from "@/assets/images/NatureMade.svg";
import { ReactComponent as BioGaia } from "@/assets/images/BioGaia.svg";
import { ReactComponent as NaturesWay } from "@/assets/images/NaturesWay.svg";

const supplements: Array<Omit<SupplementDisplayProps, "isEvenRow">> = [
  {
    name: "Multivitamins",
    Display: Blackmores,
    displayClassName: "w-[80px] h-[119px]",
    frequency: "Daily, 1 time a day",
    timer: "Now",
  },
  {
    name: "Omega-3",
    Display: NordicNaturals,
    displayClassName: "w-[85px] h-[122px]",
    frequency: "Daily, 1 time a day",
    timer: "Now",
  },
  {
    name: "Vitamin D",
    Display: NatureMade,
    displayClassName: "w-[76px] h-[131px]",
    frequency: "Daily, 1 time a day",
    timer: "15:00:00",
  },
  {
    name: "Probiotics",
    Display: BioGaia,
    displayClassName: "w-[101px] h-[121px]",
    frequency: "Daily, 1 time a day",
    timer: "15:00:00",
  },
  {
    name: "Calcium",
    Display: NaturesWay,
    displayClassName: "w-[77px] h-[129px]",
    frequency: "Daily, 1 time a day",
    timer: "14:00:00",
  },
];

export default function SupplementsPage() {
  return (
    <>
      <TitleSection title="Supplements" allowLastPage />
      <ContentSection className="h-full px-[15px]" overflow>
        <div className="flex flex-col px-[19px]">
          <div className="flex justify-between items-center">
            <span className="text-heading-2 font-bold">2023 March</span>
            <div className="flex gap-[5px]">
              <button className="border border-primaryBlue py-1 px-3 rounded-[20px]">
                Select
              </button>
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
              <SupplementDisplay key={ind} {...supp} isEvenRow={isEvenRow} />
            );
          })}
        </div>
      </ContentSection>
    </>
  );
}
