import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      {/* <MainContainer /> */}
      <Outlet />
    </div>
  );
};

export default Body;
