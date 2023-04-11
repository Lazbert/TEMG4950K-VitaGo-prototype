import TitleSection from "../components/TitleSection";
import ContentSection from "../components/ContentSection";
import RecommendationItem from "../components/RecommendationItem";
import { RecommendationItemProps } from "../components/RecommendationItem";
import { ReactComponent as Blackmores } from "@/assets/images/Blackmores.svg";
import { ReactComponent as NordicNaturals } from "@/assets/images/NordicNaturals.svg";
import { ReactComponent as NatureMade } from "@/assets/images/NatureMade.svg";
import { ReactComponent as BioGaia } from "@/assets/images/BioGaia.svg";
import { ReactComponent as NaturesWay } from "@/assets/images/NaturesWay.svg";

import { useNavigate } from "react-router-dom";

const supplements: Array<RecommendationItemProps> = [
  {
    name: "Multivitamins",
    brand: "Blackmores",
    dosageForm: "capsules",
    price: 89,
    servingPerContainer: 30,
    SupplementImage: Blackmores,
    imageClassName: "w-[39px] h-[58px]",
  },
  {
    name: "Omega-3",
    brand: "Nordic Naturals",
    dosageForm: "capsules",
    price: 109,
    servingPerContainer: 30,
    SupplementImage: NordicNaturals,
    imageClassName: "w-[58px] h-[58px] -ml-2 -mr-3",
  },
  {
    name: "Vitamin D",
    brand: "Nature Made",
    dosageForm: "tablets",
    price: 69,
    servingPerContainer: 30,
    SupplementImage: NatureMade,
    imageClassName: "w-[58px] h-[58px] -ml-2 -mr-[10px]",
  },
  {
    name: "Probiotics",
    brand: "BioGaia",
    dosageForm: "tablets",
    price: 59,
    servingPerContainer: 30,
    SupplementImage: BioGaia,
    imageClassName: "w-[58px] h-[58px] -ml-2 -mr-[9px]",
  },
  {
    name: "Calcium",
    brand: "Nature's Way",
    dosageForm: "tablets",
    price: 89,
    servingPerContainer: 30,
    SupplementImage: NaturesWay,
    imageClassName: "w-[35px] h-[58px] ml-1",
  },
];

export default function RecommendationsPage() {
  const nav = useNavigate();
  return (
    <>
      <TitleSection
        title="Recommendation"
        titleMsg="Based on your health conditions, we recommended the following supplements"
      />
      <ContentSection className="relative h-full mb-[36px] shadow-xl">
        <div className="flex flex-col gap-[18px] overflow-auto scrollbar-hide">
          {supplements.map((suppDetails, key) => (
            <>
              {key != 0 && (
                <div className="self-center border border-[#989191]/50 w-[80%]"></div>
              )}
              <RecommendationItem key={key} {...suppDetails} />
            </>
          ))}
        </div>
        <button
          onClick={() => nav("delivery")}
          className="absolute bottom-[24px] w-[307px] h-[70px] bg-highlightBrick text-white font-bold rounded-[40px]"
        >
          Continue
        </button>
      </ContentSection>
    </>
  );
}
