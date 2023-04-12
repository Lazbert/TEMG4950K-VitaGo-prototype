import { ReactComponent as IconTick } from "@/assets/icons/IconTick.svg";
import { useNavigate } from "react-router-dom";

export default function SuccessfulPaymentPage() {
  const nav = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center gap-4 text-white px-9 mb-[104px]">
        <div className="flex flex-col justify-center items-center bg-white border-[12px] border-primaryGreen rounded-full w-[220px] h-[220px]">
          <IconTick className="w-[140px] h-[143px]" />
        </div>
        <span className="font-bold text-heading-1 text-center leading-tight">
          Transaction
          <br />
          Completed
        </span>
        <span className="text-center text-heading-2">
          Congratulations on becoming a VitaGo user! Your subscription will last
          till 01/06/2023
        </span>
      </div>
      <div className="flex flex-col items-center gap-[26px]">
        <button className="w-[307px] h-[70px] text-center text-heading-2 font-bold bg-highlightBrick rounded-[40px] text-white">
          Take me to dashboard
        </button>
        <button
          onClick={() => nav("/")}
          className="w-[307px] h-[70px] text-center text-heading-2 font-bold bg-white rounded-[40px] text-primaryBlue"
        >
          OK
        </button>
      </div>
    </>
  );
}
