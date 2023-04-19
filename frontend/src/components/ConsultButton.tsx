import { ReactComponent as IconConsultButton } from "@/assets/icons/IconConsultButton.svg";

interface ConsultButtonProps {}

export const ConsultButton: React.FC<ConsultButtonProps> = () => {
  return (
    <button className="shadow-xl shadow-grey/30 absolute right-[15px] bottom-[15px] w-[75px] h-[75px] rounded-full bg-highlightBrick">
      <IconConsultButton className="mx-auto my-auto h-[57px] w-[57px]" />
    </button>
  );
};

export default ConsultButton;
