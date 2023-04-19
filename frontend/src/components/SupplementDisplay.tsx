import { ReactComponent as IconRightArrow } from "@/assets/icons/IconRightArrow.svg";
import { ReactComponent as IconSmallTick } from "@/assets/icons/IconSmallTick.svg";
import cx from "classnames";

export interface SupplementDisplayProps {
  suppInfo: {
    Display?: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >;
    brand: string;
    displayClassName: string;
    name: string;
    frequency: string;
    timer: string;
    description?: string;
  };
  isEvenRow: boolean;
  isSelectMode: boolean;
  selectingSupp: Array<string>;
  setSelectingSupp: React.Dispatch<React.SetStateAction<Array<string>>>;
}

export const SupplementDisplay: React.FC<SupplementDisplayProps> = ({
  suppInfo,
  isEvenRow,
  isSelectMode,
  selectingSupp,
  setSelectingSupp,
}) => {
  const { Display, displayClassName, frequency, name, timer } = suppInfo;
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
      {Display && <Display className={displayClassName} />}
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
      {isSelectMode &&
        (selectingSupp.includes(name) ? (
          <button
            onClick={() => {
              setSelectingSupp(selectingSupp.filter((i) => i != name));
            }}
            className="top-2 right-2 bg-primaryBlue absolute w-[28px] h-[28px] rounded-full"
          >
            <IconSmallTick className="mx-auto my-auto w-[21px] h-[21px]" />
          </button>
        ) : (
          <button
            onClick={() => {
              setSelectingSupp([...selectingSupp, name]);
            }}
            className="top-2 right-2 bg-white absolute border border-primaryBlue w-[28px] h-[28px] rounded-full"
          ></button>
        ))}
    </div>
  );
};

export default SupplementDisplay;
