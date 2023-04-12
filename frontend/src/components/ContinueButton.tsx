import cx from "classnames";

export const ContinueButton: React.FC<{
  onClick: () => void;
  className?: string;
}> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        "bg-highlightBrick rounded-[40px] px-[106px] py-6 font-bold text-white text-heading-2",
        className
      )}
    >
      Continue
    </button>
  );
};
