export const ContinueButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-highlightBrick rounded-[40px] px-[106px] py-6 font-bold text-white text-heading-2"
    >
      Continue
    </button>
  );
};
