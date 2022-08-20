import React from "react";
import { ProSidebar, Menu, MenuItem, SidebarHeader } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  FaWpforms,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="sidebar">
      <ProSidebar>
        <SidebarHeader>
          <div>
          </div>
        </SidebarHeader>
        <Menu iconShape="circle">
          <MenuItem icon={<FaWpforms />}>
            Dashboard
            <Link to="/" />
          </MenuItem>
          <MenuItem icon={<FaWpforms />}>
            Memo
            <Link to="/memo" />
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default SideNav;
