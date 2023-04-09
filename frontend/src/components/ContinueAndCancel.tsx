interface ContinueAndCancelProps {
  to: string;
  back: string;
}

export const ContinueAndCancel: React.FC<ContinueAndCancelProps> = ({
  to,
  back,
}) => {
  return (
    <>
      <div className="z-10 absolute bottom-[198px] w-full border border-grey/10" />
      <div className="bg-white absolute bottom-[33px] flex flex-col justify-center gap-[26px] px-[43px] py-5 w-full h-[165px] shadow-lg">
        <button className="text-heading-2 rounded-[40px] font-bold py-[22px] px-[106px] text-white bg-highlightBrick">
          Continue
        </button>
        <div className="text-center font-bold text-primaryBlue">Cancel</div>
      </div>
    </>
  );
};
