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
import { recommendedSupplements } from "./utils";

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
          {recommendedSupplements.map((suppDetails, key) => (
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
