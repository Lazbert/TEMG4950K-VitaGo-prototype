import { ReactComponent as IconArrowLeft } from "@/assets/icons/IconArrowLeft.svg";
import { ReactComponent as IconCross } from "@/assets/icons/IconCross.svg";
import cx from "classnames";

interface TitleSectionProps {
  title: string;
  titleMsg?: string;
  allowLastPage?: boolean;
}

export const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  titleMsg,
  allowLastPage,
}) => {
  return (
    <div className="flex text-white gap-[9px] pl-[9.6px] pr-1">
      <div className={cx("pt-[10px]", { invisible: !allowLastPage })}>
        <IconArrowLeft className="w-[15.5px] h-[25px] inline-block" />
      </div>
      <div className="flex flex-col">
        <span className="text-heading-1 font-bold">{title}</span>
        <span>{titleMsg}</span>
      </div>
      <div className="pt-[6px]">
        <IconCross className="fill-white w-[40px] h-[40px]" />
      </div>
    </div>
  );
};

export default TitleSection;
