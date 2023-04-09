import { useState } from "react";
import { ReactComponent as IconAdd } from "@/assets/icons/IconAdd.svg";
import { ReactComponent as IconTick } from "@/assets/icons/IconTick.svg";
import { ReactComponent as IconCross } from "@/assets/icons/IconCross.svg";

interface AddItemSectionProps {
  title: string;
  titleRemark?: string;
  placeholder: string;
  list: Array<{ id: number; label: string }>;
  setList: React.Dispatch<
    React.SetStateAction<Array<{ id: number; label: string }>>
  >;
}

export const AddItemSection: React.FC<AddItemSectionProps> = ({
  title,
  titleRemark,
  placeholder,
  list,
  setList,
}) => {
  const [isAddItem, setIsAddItem] = useState(false);
  const [inputItem, setInputItem] = useState<{
    id: number;
    label: string;
  } | null>(null);
  const [counter, setCounter] = useState(0);

  const toggleAddItem = () => {
    setIsAddItem(true);
  };

  const handleAddNewItem = () => {
    if (inputItem) {
      setCounter(counter + 1);
      inputItem.id = counter;
      setList([...list, inputItem]);
    }
    setInputItem(null);
    setIsAddItem(false);
  };

  const handleDeleteItem = (id: number) => {
    const newList = list.filter(({ id: itemId }) => itemId != id);
    setList(newList);
  };
  return (
    <div className="flex flex-col gap-[14px]">
      <div className="flex justify-between">
        <span className="text-heading-2 text-highlightBrick font-bold">
          {title} <span className="text-[12px]">{titleRemark}</span>
        </span>
        {isAddItem ? (
          <div
            className="pt-1 flex items-center gap-[5px]"
            onClick={handleAddNewItem}
          >
            <IconTick className="w-[10px] h-[10px]" />
            <span className="text-[14px] font-bold text-primaryGreen">
              Confirm
            </span>
          </div>
        ) : (
          <div
            className="pt-1 flex items-center gap-[5px]"
            onClick={toggleAddItem}
          >
            <IconAdd className="w-[15px] h-[15px]" />
            <span className="text-[14px] font-bold text-primaryGreen">Add</span>
          </div>
        )}
      </div>
      {list.length != 0 && (
        <div className="flex flex-wrap gap-3">
          {list.map((item, key) => (
            <div
              key={key}
              className="flex justify-between items-center px-2 py-3 w-fit h-10 border border-primaryBlue rounded-[10px] gap-2"
              onClick={() => handleDeleteItem(item.id)}
            >
              <span className="text-[14px]">{item.label}</span>
              <IconCross className="fill-primaryBlue w-[20px] h-[20px]" />
            </div>
          ))}
        </div>
      )}
      {isAddItem && (
        <input
          className="border border-primaryBlue rounded-[10px] py-3 px-2 w-fit focus:outline-none"
          placeholder={placeholder}
          onChange={(e) => setInputItem({ id: 0, label: e.target.value })}
        />
      )}
    </div>
  );
};

export default AddItemSection;
