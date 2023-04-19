import ContentSection from "../components/ContentSection";
import TitleSection from "../components/TitleSection";
import { SymptomItem, SymptomItemProps } from "../components/SymptomItem";

const symptoms: Array<SymptomItemProps> = [
  { stat: 37.3, unit: "Degree Celsius", symptom: "Fever" },
];

export default function SymptomPage() {
  return (
    <>
      <TitleSection
        title="Your Symptoms"
        titleMsg="You may add as many as 10 symptoms"
        allowLastPage
      />
      <ContentSection className="h-full">
        {symptoms.map((item) => (
          <SymptomItem {...item} />
        ))}
      </ContentSection>
      <div className="flex flex-col gap-[14px] py-[17px] items-center bottom-0 absolute border-t border-grey/30 w-full h-[220px]">
        <button className="rounded-[40px] min-w-[307px] px-[130px] py-6 bg-highlightBrick text-heading-2 text-white font-bold">
          Next
        </button>
        <button className="rounded-[40px] min-w-[307px] px-[85px] py-6 border-2 border-highlightBrick text-highlightBrick text-heading-2 font-bold">
          Add symptom
        </button>
      </div>
    </>
  );
}
