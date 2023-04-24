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
        titleMsg="Based on your conditions, we recommended the followings besides your prescription"
      />
      <ContentSection
        className="relative h-full mb-[36px] !pb-[120px] shadow-xl"
        overflow
      >
        <div className="flex flex-col gap-[18px] overflow-auto scrollbar-hide">
          <div className="flex gap-5 items-center">
            <div className="text-[16px] font-bold">
              Prescription:
              <br />
              <span className="font-normal">
                Insulin Glulisine & Insulin Glargine
              </span>
            </div>
          </div>
          <div className="self-center border border-[#989191] w-full"></div>
          {recommendedSupplements.map((suppDetails, key) => (
            <>
              {key != 0 && (
                <div className="self-center border border-[#989191]/50 w-[80%]"></div>
              )}
              <RecommendationItem key={key} {...suppDetails} />
            </>
          ))}
        </div>
      </ContentSection>
      <button
        onClick={() => nav("delivery")}
        className="absolute bottom-[60px] ml-[43px] w-[307px] h-[70px] bg-highlightBrick text-white font-bold rounded-[40px]"
      >
        Continue
      </button>
    </>
  );
}
