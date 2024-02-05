import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

function Body() {
  return (
    <>
      <Header />
      <div className="flex pt-[55px] ">
        <SideBar  />
        <Outlet />
      </div>
    </>
  );
}

export default Body;
