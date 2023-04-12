import { ReactComponent as IconTick } from "@/assets/icons/IconTick.svg";

export default function SuccessfulPaymentPage() {
  return (
    <>
      <div className="self-center flex flex-col justify-center items-center bg-white border-[12px] border-primaryGreen rounded-full w-[220px] h-[220px]">
        <IconTick className="w-[140px] h-[143px]" />
      </div>
      <span>Transaction Completed</span>
    </>
  );
}
