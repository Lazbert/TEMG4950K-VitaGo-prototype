interface SuppDescriptionItemProps {
  title: string;
  value: string;
}

export const SuppDescriptionItem: React.FC<SuppDescriptionItemProps> = ({
  title,
  value,
}) => {
  return (
    <div className="flex flex-col text-[16px]">
      <span className="font-bold text-primaryBlue">{title}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
};

export default SuppDescriptionItem;
