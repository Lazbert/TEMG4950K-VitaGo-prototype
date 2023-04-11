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
    <div className="flex flex-col text-white pl-[9.6px] pr-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[9px]">
          <IconArrowLeft
            className={cx("w-[15.5px] h-[25px] inline-block", {
              invisible: !allowLastPage,
            })}
          />
          <span className="text-heading-1 font-bold">{title}</span>
        </div>
        <IconCross className="fill-white w-[40px] h-[40px]" />
      </div>
      <span className="ml-[26px]">{titleMsg}</span>
    </div>
  );
};

export default TitleSection;
