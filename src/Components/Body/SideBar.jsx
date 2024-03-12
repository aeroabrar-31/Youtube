import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SideBar = () => {
  const flag = useSelector((store) => store.app.isToggleOpen);

  if (flag) return null;

  return (
    <div className="p-2 w-36 shadow-lg">
      <ul className="px-3">
        <li>Home</li>
        <li>About</li>
        <li>About</li>
        <li>About</li>
        <li>About</li>
      </ul>
      <h1 className="font-bold">Explore</h1>
      <ul className="px-3">
        <li>Home</li>
        <li>About</li>
        <li>About</li>
        <li>About</li>
        <li>About</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul className="px-3">
        <li>Home</li>
        <li>About</li>
        <li>About</li>
        <li>About</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default SideBar;
