import { useNavigate } from "react-router-dom";
import { ReactComponent as IconVitaGo } from "@/assets/icons/IconVitaGo.svg";

export default function IconPage() {
  const nav = useNavigate();
  return (
    <div className="bg-no-repeat bg-[url('/images/VitaGo_IconPage.png')]">
      <button
        onClick={() => nav("/data")}
        className="absolute top-[37.4%] left-[43.8%]"
      >
        <IconVitaGo className="h-[48px] w-[48px]" />
        <span className="font-semibold">VitaGo</span>
      </button>
    </div>
  );
}
