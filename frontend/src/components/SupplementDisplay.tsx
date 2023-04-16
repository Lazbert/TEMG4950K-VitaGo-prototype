import { ReactComponent as IconRightArrow } from "@/assets/icons/IconRightArrow.svg";
import cx from "classnames";

export interface SupplementDisplayProps {
  Display: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  displayClassName: string;
  name: string;
  frequency: string;
  isEvenRow: boolean;
  timer: string;
}

export const SupplementDisplay: React.FC<SupplementDisplayProps> = ({
  Display,
  displayClassName,
  name,
  frequency,
  isEvenRow,
  timer,
}) => {
  return (
    <div
      className={cx(
        "relative rounded-[10px] w-[174px] h-[224px] p-[10px] flex flex-col items-center justify-between gap-[10px]",
        {
          "bg-suppGreen": isEvenRow,
          "bg-suppOrange": !isEvenRow,
        }
      )}
    >
      <Display className={displayClassName} />
      <div className="px-[10px] py-1 w-full bg-white flex flex-col justify-center rounded-[10px]">
        <div className="flex justify-between">
          <span className="font-medium">{name}</span>
          <IconRightArrow className="-mr-2 w-[24px] h-[24px]" />
        </div>
        <span className="text-[12px] text-[#989191]">{frequency}</span>
        <span
          className={cx("text-center text-heading-2 mt-[10px]", {
            "text-highlightBrick font-bold": timer == "Now",
          })}
        >
          {timer}
        </span>
      </div>
    </div>
  );
};

export default SupplementDisplay;
