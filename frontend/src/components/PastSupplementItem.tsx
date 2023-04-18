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
}

export const PastSupplementsItem: React.FC<PastSupplementsItemProps> = ({
  Display,
  displayClassName,
  name,
  brand,
  isFirst,
}) => {
  return (
    <div className="flex flex-col items-center">
      {!isFirst && <div className="w-[95%] border-t border-grey my-6" />}
      <div className="flex items-center gap-4">
        {Display && <Display className={displayClassName} />}
        <div className="flex flex-col justify-center">
          <span className="text-[18px] font-bold">
            {name} - {brand}
          </span>
          <span className="font-bold text-[#989191]">2023 March</span>
        </div>
        <div className="min-w-[30px] min-h-[30px] rounded-full border border-primaryBlue"></div>
      </div>
    </div>
  );
};
