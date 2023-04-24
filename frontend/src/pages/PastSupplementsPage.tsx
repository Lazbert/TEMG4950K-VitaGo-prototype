import ContentSection from "../components/ContentSection";
import TitleSection from "../components/TitleSection";
import { useLocation, useNavigate } from "react-router-dom";
import { originalSupplements, recommendedSupplements } from "./utils";
import { PastSupplementsItem } from "../components/PastSupplementItem";
import { useState } from "react";
import cx from "classnames";

export default function PastSupplementsPage() {
  const nav = useNavigate();
  const state = useLocation().state;
  const [selected, setSelected] = useState<Array<string>>([]);
  const remainingNames: Array<string> = state.remaining;
  const dropped = originalSupplements.filter(
    (supp) => !remainingNames.includes(supp.suppInfo.name)
  );

  return (
    <>
      <TitleSection title="Past Supplements" allowLastPage />
      <ContentSection className="h-full pt-[35px] !px-3" overflow>
        {dropped.map((item, ind) => {
          if (item.suppInfo) {
            const { name, brand } = item.suppInfo;
            const Display = originalSupplements.filter(
              (supp) => supp.suppInfo.name == item.suppInfo.name
            )[0].suppInfo.Display;
            const displayClassName = recommendedSupplements.filter(
              (supp) => supp.name == name
            )[0].imageClassName;
            return (
              <PastSupplementsItem
                key={ind}
                Display={Display}
                brand={brand}
                name={name}
                displayClassName={displayClassName}
                isFirst={ind == 0}
                selected={selected}
                setSelected={setSelected}
              />
            );
          }
        })}
      </ContentSection>
      <div className="flex items-center justify-center bottom-0 absolute w-full h-[142px] border-t border-grey/30 ">
        <button
          onClick={() =>
            nav("/VitaGo/supplements", {
              state: { suppList: [...selected, ...state.remaining] },
            })
          }
          className={cx(
            "font-medium text-heading-2 rounded-[40px] w-[307px] h-[70px] text-white bg-highlightBrick",
            {
              "!bg-[#CECECE] disabled": selected.length == 0,
            }
          )}
          disabled={selected.length == 0}
        >
          {selected.length == 0
            ? "Select supplements"
            : `Restore ${selected.length} supplements`}
        </button>
      </div>
    </>
  );
}
