interface ContentSectionProps {
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ children }) => {
  return (
    <div className="px-[34px] pt-[23px] pb-[53px] w-full bg-white rounded-t-[30px]">
      {children}
    </div>
  );
};

export default ContentSection;
