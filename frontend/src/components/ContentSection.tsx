import cx from "classnames";

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  overflow?: boolean;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  className,
  overflow,
}) => {
  return (
    <div
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
