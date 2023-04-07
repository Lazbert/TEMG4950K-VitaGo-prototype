interface ContentSectionProps {
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ children }) => {
  return (
    <div className="px-[34px] py-[23px] w-full h-full bg-white rounded-t-[30px]">
      {children}
    </div>
  );
};

export default ContentSection;
