import { ReactComponent as IconConsultButton } from "@/assets/icons/IconConsultButton.svg";
import { useNavigate } from "react-router-dom";

export const ConsultButton: React.FC = () => {
  const nav = useNavigate();
  return (
    <button
      onClick={() => nav("/VitaGo/symptoms")}
      className="shadow-xl shadow-grey/30 absolute right-[15px] bottom-[15px] w-[75px] h-[75px] rounded-full bg-highlightBrick"
    >
      <IconConsultButton className="mx-auto my-auto h-[57px] w-[57px]" />
    </button>
  );
};

export default ConsultButton;
