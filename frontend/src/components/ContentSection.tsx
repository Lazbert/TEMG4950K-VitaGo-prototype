import cx from "classnames";

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  overflow?: boolean;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  className,
  overflow,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={cx(
        "px-[34px] pt-[23px] pb-[53px] w-full bg-white rounded-t-[30px]",
        className,
        { "overflow-auto scrollbar-hide": overflow }
      )}
    >
      {children}
    </div>
  );
};

export default ContentSection;
