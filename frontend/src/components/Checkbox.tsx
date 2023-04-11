import { ReactComponent as IconCheckedBox } from "@/assets/icons/IconCheckedBox.svg";
import { ReactComponent as IconUncheckedBox } from "@/assets/icons/IconUncheckedBox.svg";
import cx from "classnames";

interface CheckboxProps {
  state: boolean;
  onClick: () => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  state,
  onClick,
  className,
}) => {
  return (
    <div className={cx("pt-[2px]", className)} onClick={onClick}>
      {state ? (
        <IconCheckedBox className="w-[19px] h-[19px]" />
      ) : (
        <IconUncheckedBox className="w-[19px] h-[19px]" />
      )}
    </div>
  );
};

export default Checkbox;
