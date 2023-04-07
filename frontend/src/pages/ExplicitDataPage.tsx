import { useNavigate } from "react-router-dom";
import { TitleSection } from "../components/TitleSection";
import { ContentSection } from "../components/ContentSection";

export default function ExplicitDataPage() {
  return (
    <div className="h-full flex flex-col gap-[9px] pt-[101px]">
      <TitleSection
        title="VitaGo"
        titleMsg="Please provide the following information to proceed"
        allowLastPage
      />
      <ContentSection>
        <span className="text-heading-2 text-highlightBrick font-bold">
          Personal Information
        </span>
      </ContentSection>
    </div>
  );
}
