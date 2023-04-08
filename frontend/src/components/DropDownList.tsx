interface DropDownListProps {
  options?: Array<{ label: string }>;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setShowDropDownList: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropDownList: React.FC<DropDownListProps> = ({
  options,
  setSelected,
  setShowDropDownList,
}) => {
  return (
    <div className="z-20 bg-white flex flex-col w-full absolute top-[63px] p-2 border border-primaryBlue rounded-[15px]">
      {options &&
        options.map(({ label }, key) => {
          return (
            <div
              key={key}
              className="bg-white p-1"
              onClick={() => {
                setSelected(label);
                setShowDropDownList(false);
              }}
            >
              {label}
            </div>
          );
        })}
    </div>
  );
};

export default DropDownList;
