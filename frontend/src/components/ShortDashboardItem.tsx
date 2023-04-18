import cx from "classnames";

export interface ShortDashboardItemProps {
  title: string;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  iconClassName: string;
  stat: number;
  statClassName: string;
  unit: string;
}

export const ShortDashboardItem: React.FC<ShortDashboardItemProps> = ({
  title,
  Icon,
  iconClassName,
  stat,
  statClassName,
  unit,
}) => {
  return (
    <div className="rounded-[10px] bg-paleBlue shadow-md min-w-[153px] p-[15px] flex flex-col gap-2">
      <div className="flex gap-1 items-center">
        <span className="font-bold text-[16px]">{title}</span>
        <Icon className={iconClassName} />
      </div>
      <div className="flex flex-col items-center">
        <span className={cx("font-bold text-[36px]", statClassName)}>
          {stat}
        </span>
        <span className="text-[16px]"> {unit}</span>
      </div>
    </div>
  );
};
