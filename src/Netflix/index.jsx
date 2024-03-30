import React from "react";
import { Outlet } from "react-router-dom";

function Netflix() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Netflix;
