import { ReactComponent as IconTrash } from "@/assets/icons/IconTrash.svg";

export interface SymptomItemProps {
  symptom: string;
  stat: number;
  unit: string;
}

export const SymptomItem: React.FC<SymptomItemProps> = ({
  symptom,
  stat,
  unit,
}) => {
  return (
    <div className="rounded-[20px] shadow-xl flex flex-col justify-between gap-5 min-w-[342px] h-[151px] pt-[30px] pb-3">
      <div className="px-5 text-heading-2 font-bold">{symptom}</div>
      <div className="flex justify-center items-center gap-[26px]">
        <div className="px-[13px] bg-[#aa98bc] rounded-[30px] flex items-center min-w-[254px] min-h-[53px]">
          <span className="text-[18px] text-white">
            {stat} {unit}
          </span>
        </div>
        <IconTrash className="w-[33px] h-[39px]" />
      </div>
    </div>
  );
};
