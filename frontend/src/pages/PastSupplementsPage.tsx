import ContentSection from "../components/ContentSection";
import TitleSection from "../components/TitleSection";
import { SupplementDisplayProps } from "../components/SupplementDisplay";
import { useLocation } from "react-router-dom";
import { originalSupplements, recommendedSupplements } from "./utils";
import { PastSupplementsItem } from "../components/PastSupplementItem";

export default function PastSupplementsPage() {
  const state = useLocation().state;
  const droppedNames: Array<string> = state.dropped;
  const dropped = originalSupplements.filter((supp) =>
    droppedNames.includes(supp.suppInfo.name)
  );
  return (
    <>
      <TitleSection title="Past Supplements" allowLastPage />
      <ContentSection className="h-full pt-[35px] !px-3">
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
              />
            );
          }
        })}
      </ContentSection>
    </>
  );
}
