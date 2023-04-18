import { ReactComponent as IconDrGo } from "@/assets/icons/IconDrGo.svg";

interface NotificationProps {
  text: string;
  onClick: () => void;
}

export const Notification: React.FC<NotificationProps> = ({
  text,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="mx-auto px-3 py-6 rounded-[22px] bg-white/60 w-[375px] h-[117px] flex justify-center items-center"
    >
      <IconDrGo className="z-10 min-w-[38px] min-h-[38px]" />
      <div className="pl-[9px] flex flex-col justify-center gap-[2px]">
        <span className="font-bold text-black">DrGo</span>
        <span className="text-grey text-[14px]">{text}</span>
      </div>
    </div>
  );
};

export default Notification;
