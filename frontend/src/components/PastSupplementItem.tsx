import { useState } from "react";
import { ReactComponent as IconSmallTick } from "@/assets/icons/IconSmallTick.svg";
import cx from "classnames";

interface PastSupplementsItemProps {
  Display?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  displayClassName?: string;
  name: string;
  brand: string;
  isFirst: boolean;
  selected: Array<string>;
  setSelected: React.Dispatch<React.SetStateAction<Array<string>>>;
}

export const PastSupplementsItem: React.FC<PastSupplementsItemProps> = ({
  Display,
  displayClassName,
  name,
  brand,
  isFirst,
  selected,
  setSelected,
}) => {
  const [checked, setChecked] = useState(false);

  const onClickHandler = () => {
    if (checked) {
      const updated = selected.filter((item) => item != name);
      setSelected(updated);
    } else {
      setSelected([...selected, name]);
    }
    setChecked(!checked);
  };

  return (
    <div className="flex flex-col items-center">
      {!isFirst && <div className="w-[95%] border-t border-grey my-6" />}
      <div className="flex items-center gap-4">
        {Display && <Display className={displayClassName} />}
        <div className="w-[236px] flex flex-col justify-center">
          <span className="text-[16px] font-bold">
            {name} - {brand}
          </span>
          <span className="font-medium text-[#989191]">2023 March</span>
        </div>
        <button
          onClick={onClickHandler}
          className={cx(
            "min-w-[30px] min-h-[30px] rounded-full border border-primaryBlue",
            { "bg-primaryBlue": checked }
          )}
        >
          {checked && (
            <IconSmallTick className="mx-auto my-auto w-[20px] h-[20px]" />
          )}
        </button>
      </div>
    </div>
  );
};
