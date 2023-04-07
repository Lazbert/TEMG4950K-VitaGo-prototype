import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="bg-primaryBlue">
      <Outlet />
    </div>
  );
}
