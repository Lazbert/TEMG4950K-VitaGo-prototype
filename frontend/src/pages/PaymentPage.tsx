import { useState } from "react";
import Agreement from "../components/Agreement";
import ContentSection from "../components/ContentSection";
import { ReceiptItem } from "../components/ReceiptItem";
import TitleSection from "../components/TitleSection";
import IconSupplement from "@/assets/icons/IconSupplement.png";
import { ReactComponent as IconTick } from "@/assets/icons/IconTick.svg";
import { ReactComponent as IconVisaMaster } from "@/assets/icons/IconVisaMaster.svg";
import { ReactComponent as IconTapAndGo } from "@/assets/icons/IconTapAndGo.svg";
import { ReactComponent as IconAlipay } from "@/assets/icons/IconAlipay.svg";
import { ReactComponent as IconUnionPay } from "@/assets/icons/IconUnionPay.svg";
import { ReactComponent as IconOctopus } from "@/assets/icons/IconOctopus.svg";
import { ReactComponent as IconWeChat } from "@/assets/icons/IconWeChat.svg";
import PaymentMethod from "../components/PaymentMethod";
import { ContinueButton } from "../components/ContinueButton";
import { useNavigate } from "react-router-dom";

const receiptItems = [
  { item: "3-month Vital-Go subscription plan (HK$200/month)", price: "600" },
  {
    item: "Digestive Biscuits (Sugar-Free) - Gullon",
    price: "47.6*",
    servings: "400 g",
  },
  {
    item: "Starch Neutralizer - NOW Foods",
    price: "140.4*",
    servings: "120 capsules",
  },
  // { item: "Vitamin D - Nature Made", price: "53.1*", servings: "30 tablets" },
  { item: "Probiotics - BioGaia", price: "80.1*", servings: "30 tablets" },
  // { item: "Calcium - Nature's way", price: "80.1*", servings: "30 tablets" },
  {
    item: "Diabetes Health Pack - Nature's way",
    price: "165.6*",
    servings: "30 packets",
  },
];

const paymentMethods = [
  {
    IconPayment: IconVisaMaster,
    iconClassName: "w-[109px] h-[26px]",
    text: "Visa / Mastercard",
  },
  {
    IconPayment: IconTapAndGo,
    iconClassName: "w-[60px] h-[38px]",
    text: "Tap & Go",
  },
  {
    IconPayment: IconAlipay,
    iconClassName: "w-[96px] h-[21px]",
    text: "Alipay",
  },
  {
    IconPayment: IconUnionPay,
    iconClassName: "w-[48px] h-[30px]",
    text: "UnionPay",
  },
  {
    IconPayment: IconOctopus,
    iconClassName: "w-[45px] h-[33px]",
    text: "Octopus",
  },
  {
    IconPayment: IconWeChat,
    iconClassName: "w-[39px] h-[39px]",
    text: "WeChat Pay",
  },
];

type Payment =
  | ""
  | "Visa / Mastercard"
  | "Tap & Go"
  | "Alipay"
  | "UnionPay"
  | "Octopus"
  | "WeChat Pay";

export default function PaymentPage() {
  const nav = useNavigate();
  const [saveCreditCard, setSaveCreditCard] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<Payment>("");
  return (
    <>
      <TitleSection title="Your Subscription" allowLastPage />
      <ContentSection
        className="shadow-xl pt-[50px] pb-6 px-6 mb-[36px]"
        overflow
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-5 items-center">
            <img src={IconSupplement} className="h-[60px] w-[60px]" />
            <div className="flex flex-col">
              <span className="font-bold text-heading-2 text-primaryBlue">
                Vital-Go Subscription
              </span>
              <span>By subscribing to Vital-Go, you receive:</span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <IconTick className="min-w-[22px] min-h-[20px]" />
            <span className="text-[14px]">
              Health tracker based on real-time data
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <IconTick className="min-w-[22px] min-h-[20px]" />
            <span className="text-[14px]">
              Monthly personalized recommendations of supplements
            </span>
          </div>
        </div>
        <div className="border-t border-grey/50 w-full my-[18px]"></div>
        <div className="grid grid-cols-[5fr_2fr] gap-y-[14px]">
          <span className="font-bold">
            Items <br />
            (excluding prescribed drugs)
          </span>
          <span className="font-bold text-right">Price (HK$)</span>
          {receiptItems.map((item) => (
            <ReceiptItem {...item} />
          ))}
        </div>
        <div className="border-t border-grey/50 w-full my-[18px]"></div>
        <div className="flex justify-between">
          <span className="text-heading-2 font-bold">Total</span>
          <span className="text-heading-2 font-bold text-highlightBrick">
            HK$1,033.7
          </span>
        </div>
        <div className="w-full flex justify-end">
          <span>(*10% off for recommended items)</span>
        </div>
        <div className="border-t border-grey/50 w-full my-[18px]"></div>
        <Agreement
          text="Save credit card in my “Profile” for future subscriptions"
          toggleOn={saveCreditCard}
          setToggleOn={setSaveCreditCard}
        />
        <div className="my-10 flex flex-col gap-5">
          {paymentMethods.map((method, key) => (
            <PaymentMethod
              {...method}
              key={key}
              selectedPaymentMethod={selectedPaymentMethod}
              setSelectedPaymentMethod={setSelectedPaymentMethod}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <ContinueButton
            onClick={() => selectedPaymentMethod && nav("success")}
          />
        </div>
      </ContentSection>
    </>
  );
}
