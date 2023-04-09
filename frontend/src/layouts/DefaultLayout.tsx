import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="bg-primaryBlue flex flex-col gap-[9px] pt-[101px]">
      <Outlet />
    </div>
  );
}
