import Checkbox from "./Checkbox";

interface PaymentMethodProps {
  IconPayment: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  iconClassName?: string;
  text: string;
  selectedPaymentMethod: string;
  setSelectedPaymentMethod: React.Dispatch<React.SetStateAction<any>>;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({
  IconPayment,
  iconClassName,
  text,
  selectedPaymentMethod,
  setSelectedPaymentMethod,
}) => {
  return (
    <div className="flex gap-[10px] items-center">
      <Checkbox
        state={selectedPaymentMethod == text}
        onClick={() => {
          setSelectedPaymentMethod(text);
        }}
      />
      <IconPayment className={iconClassName ?? ""} />
      <span className="text-[14px]">{text}</span>
    </div>
  );
};

export default PaymentMethod;
