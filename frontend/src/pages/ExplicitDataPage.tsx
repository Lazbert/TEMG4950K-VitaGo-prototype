import { useNavigate } from "react-router-dom";
import TitleSection from "../components/TitleSection";
import ContentSection from "../components/ContentSection";
import DataInput from "../components/DataInput";

export default function ExplicitDataPage() {
  const inputFields = [
    { title: "Sex", options: [{ label: "Male" }, { label: "Female" }] },
    {
      title: "District",
      options: [{ label: "Tsuen Wan" }, { label: "Sham Shui Po" }],
    },
    {
      title: "Sub-district",
      options: [{ label: "Lei Muk Shue" }, { label: "Ma Wan" }],
    },
  ];

  return (
    <div className="h-full flex flex-col gap-[9px] pt-[101px]">
      <TitleSection
        title="VitaGo"
        titleMsg="Please provide the following information to proceed"
        allowLastPage
      />
      <ContentSection>
        <div className="flex flex-col gap-[14px]">
          <span className="text-heading-2 text-highlightBrick font-bold">
            Personal Information
          </span>
          {inputFields.map(({ title, options }, key) => (
            <DataInput key={key} title={title} options={options} />
          ))}
        </div>
      </ContentSection>
    </div>
  );
}
