import cx from "classnames";

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cx(
        "px-[34px] pt-[23px] pb-[53px] w-full bg-white rounded-t-[30px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ContentSection;
