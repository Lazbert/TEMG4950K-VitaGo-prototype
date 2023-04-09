import cx from "classnames";

interface ContinueAndCancelProps {
  onContinue: () => void;
  onCancel: () => void;
  className?: string;
}

export const ContinueAndCancel: React.FC<ContinueAndCancelProps> = ({
  onContinue,
  onCancel,
  className,
}) => {
  return (
    <>
      <div
        className={cx(
          "z-10 absolute bottom-[198px] w-full border border-grey/10",
          className
        )}
      />
      <div
        className={cx(
          "bg-white absolute bottom-[33px] flex flex-col justify-center gap-[26px] px-[43px] py-5 w-full h-[165px] shadow-lg",
          className
        )}
      >
        <button
          onClick={onContinue}
          className="text-heading-2 rounded-[40px] font-bold py-[22px] px-[106px] text-white bg-highlightBrick"
        >
          Continue
        </button>
        <div
          onClick={onCancel}
          className="text-center font-bold text-primaryBlue"
        >
          Cancel
        </div>
      </div>
    </>
  );
};
