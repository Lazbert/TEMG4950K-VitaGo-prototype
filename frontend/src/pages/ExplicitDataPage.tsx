import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleSection from "../components/TitleSection";
import ContentSection from "../components/ContentSection";
import DataInput from "../components/DataInput";
import AddItemSection from "../components/AddItemSection";
import { ReactComponent as IconCheckedBox } from "@/assets/icons/IconCheckedBox.svg";
import { ReactComponent as IconUncheckedBox } from "@/assets/icons/IconUncheckedBox.svg";
import { ReactComponent as IconImage } from "@/assets/icons/IconImage.svg";
import Checkbox from "../components/Checkbox";

export default function ExplicitDataPage() {
  const nav = useNavigate();
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
  const [healthHistory, setHealthHistory] = useState<
    Array<{ id: number; label: string }>
  >([]);
  const [travelRecords, setTravelRecord] = useState<
    Array<{ id: number; label: string }>
  >([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [checked, setChecked] = useState(false);
  return (
    <>
      <TitleSection
        title="VitaGo"
        titleMsg="Please provide the following information to proceed"
        allowLastPage
      />
      <ContentSection>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-[14px]">
            <span className="text-heading-2 text-highlightBrick font-bold">
              Personal Information
            </span>
            <DataInput title={"Date of Birth"} calendar />
            {inputFields.map(({ title, options }, key) => (
              <DataInput key={key} title={title} options={options} />
            ))}
          </div>
          <AddItemSection
            title="My Health Records"
            placeholder="Disease / Allergy"
            list={healthHistory}
            setList={setHealthHistory}
          />
          <AddItemSection
            title="Travel Records"
            titleRemark="last 3 months"
            placeholder="Country"
            list={travelRecords}
            setList={setTravelRecord}
          />
          <div className="flex flex-col gap-[14px]">
            <span className="text-heading-2 text-highlightBrick font-bold">
              Tongue Image
            </span>
            <label htmlFor="upload-image">
              {selectedImage ? (
                <img
                  className="h-[169px]"
                  src={URL.createObjectURL(selectedImage)}
                />
              ) : (
                <div className="flex flex-col justify-center items-center rounded-[8px] border-2 border-dashed border-primaryBlue h-[169px]">
                  <IconImage className="w-[24px] h-[24px]" />
                  <span className="text-primaryBlue underline">
                    Upload Image
                  </span>
                </div>
              )}
            </label>
            <input
              id="upload-image"
              className="invisible"
              type="file"
              onChange={(event) => {
                if (event.target.files) {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }
              }}
            />
          </div>
          <div className="flex flex-col mt-[50px] gap-5">
            <div className="flex gap-2">
              <Checkbox state={checked} onClick={() => setChecked(!checked)} />
              <span>
                I agree to the collection of wearables and eHealth data by
                VitaGo to receive better services
              </span>
            </div>
            <button
              onClick={() => nav("booking")}
              className="bg-highlightBrick text-white py-[22px] px-[106px] text-heading-2 font-bold rounded-[40px]"
            >
              Continue
            </button>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
