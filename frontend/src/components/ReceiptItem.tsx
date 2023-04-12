interface ReceiptItemProps {
  item: string;
  price: string;
  servings?: string;
}

export const ReceiptItem: React.FC<ReceiptItemProps> = ({
  item,
  price,
  servings,
}) => {
  return (
    <>
      <div className="flex flex-col">
        <span>{item}</span>
        {servings && <span>({servings})</span>}
      </div>
      <span className="text-right">{price}</span>
    </>
  );
};
