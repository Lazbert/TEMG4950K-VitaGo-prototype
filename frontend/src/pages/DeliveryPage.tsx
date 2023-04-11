import ContentSection from "../components/ContentSection";
import TitleSection from "../components/TitleSection";
import { ReactComponent as IconDelivery } from "@/assets/icons/IconDelivery.svg";
import Checkbox from "../components/Checkbox";
import { useState } from "react";
import { ContinueButton } from "../components/ContinueButton";
import { useNavigate } from "react-router-dom";

export default function DeliveryPage() {
  const [checked, setChecked] = useState(false);
  const nav = useNavigate();
  return (
    <>
      <TitleSection
        title="Delivery"
        titleMsg="Please check your delivery address to proceed to payment"
        allowLastPage
      />
      <ContentSection
        className="mb-[36px] pb-[73px]
       shadow-xl"
        overflow
      >
        <div className="flex flex-col gap-[38px] mb-[83px]">
          <div className="flex flex-col items-center gap-[43px]">
            <IconDelivery className="w-[85px] h-[85px]" />
            <span>
              We do not deliver to certain locations
              <br />
              <br />
              If VitaGo’s delivery is unable to deliver the supplements at the
              agreed time to you (other than due to the fault of the delivery
              person) and another time has to be arranged, you will be liable to
              pay a surcharge for the delivery service
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#C4C4C4]">Delivery address</span>
              <span>
                HKUST,
                <br />
                Clear Water Bay,
                <br />
                Kowloon,
                <br />
                Hong Kong
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#C4C4C4]">Recipient name</span>
              <span>Apollo Consulting</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#C4C4C4]">
                Recipient contact number
              </span>
              <span>12345678</span>
            </div>
            <div className="flex gap-4">
              <Checkbox state={checked} onClick={() => setChecked(!checked)} />
              <span className="leading-tight">
                By clicking “Confirm”, you authorise your medicine or test kit
                to be delivered to you and/or specimen to be collected from you
                (or any person who possesses your Case Number) at the above
                delivery address
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[26px]">
          <ContinueButton
            onClick={() => {
              return;
            }}
          />
          <button className="font-bold text-primaryBlue">
            Edit delivery profile
          </button>
        </div>
      </ContentSection>
    </>
  );
}
