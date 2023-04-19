import cx from "classnames";

export interface LongDashboardItemProps {
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
  highlight: string;
  highlightClassName: string;
  insight: string;
}

export const LongDashboardItem: React.FC<LongDashboardItemProps> = ({
  Icon,
  iconClassName,
  insight,
  stat,
  statClassName,
  highlight,
  highlightClassName,
  title,
  unit,
}) => {
  return (
    <div className="shadow-md min-w-[324px] px-[15px] py-3 rounded-[10px] bg-paleBlue flex items-center gap-[10px]">
      <div className="w-[70%] flex flex-col">
        <div className="flex gap-1">
          <span className="font-bold text-[16px]">{title}</span>
          <Icon className={iconClassName} />
        </div>
        <span className="text-[16px]">
          <span className={cx("text-[36px] font-bold", statClassName)}>
            {stat}
          </span>{" "}
          {unit}
        </span>
      </div>
      <span className="text-center text-[14px]">
        <span className={cx("font-bold", highlightClassName)}>
          {highlight}{" "}
        </span>
        {insight}
      </span>
    </div>
  );
};
