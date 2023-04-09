import TitleSection from "../components/TitleSection";
import ContentSection from "../components/ContentSection";
import { ReactComponent as IconDownArrow } from "@/assets/icons/IconDownArrow.svg";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const nav = useNavigate();
  return (
    <>
      <TitleSection title="Healthcare Professional" allowLastPage />
      <ContentSection className="h-full">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-[6px]">
            <span className="text-[24px]">General Practice & Supplements</span>
            <span>
              The shown appointment slots are not confirmed. The actual
              appointment date and time may differ and is subject to the
              completion of your booking procedures and the doctor’s/healthcare
              professional’s availability
            </span>
          </div>
          <div className="flex flex-col gap-[14px]">
            <div className="flex justify-between items-center">
              <span className="w-[80%] text-heading-2 text-highlightBrick font-bold">
                Doctors
              </span>
              <span className="text-right font-bold text-highlightBrick">
                Earliest available date
              </span>
            </div>
            <div
              onClick={() =>
                nav("calendar", {
                  state: {
                    fullname: "Leung Cheuk Lam",
                    nickname: "Lambert",
                    medCenter: "Stressless HealthCare Centre",
                    location: "Clear Water Bay",
                  },
                })
              }
              className="flex justify-between"
            >
              <div className="text-primaryBlue flex flex-col w-[70%]">
                <span>Dr. Leung Cheuk Lam, Lambert</span>
                <span>
                  Stressless HealthCare Center
                  <br />
                  (Clear Water Bay)
                </span>
              </div>
              <div className="-mr-5 flex h-fit items-center">
                <div>
                  <span>2023/03/01</span>
                  <br />
                  <span>Wednesday</span>
                </div>
                <IconDownArrow className="w-[30px] h-[30px] -rotate-90 fill-primaryBlue" />
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
