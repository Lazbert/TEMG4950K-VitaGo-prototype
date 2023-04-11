export interface RecommendationItemProps {
  SupplementImage: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  imageClassName?: string;
  name: string;
  brand: string;
  price: number;
  servingPerContainer: number;
  dosageForm: string;
}

export const RecommendationItem: React.FC<RecommendationItemProps> = ({
  SupplementImage,
  imageClassName,
  name,
  brand,
  price,
  servingPerContainer,
  dosageForm,
}) => {
  return (
    <div className="flex gap-5 items-center">
      <SupplementImage className={imageClassName} />
      <div className="flex flex-col justify-center">
        <span className="font-bold text-[18px]">
          {name} - {brand}
        </span>
        <span className="font-bold text-[14px]">
          HKD {price} - {servingPerContainer} {dosageForm}
        </span>
      </div>
    </div>
  );
};

export default RecommendationItem;
