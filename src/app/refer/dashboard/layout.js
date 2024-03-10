'use client'
import Sidebar from "@/app/components/refer/dashboard/Sidebar";
import '../../components/assets/css/styles.min.css';
import { Auth } from "@/app/components/common/Auth";
import Navbar from "@/app/components/refer/dashboard/Navbar";
import { useState } from "react";
import React from "react";

function ReferDashboardLayout({children}) {
  const [showSidebar, setShowSidebar] = useState(false);

  const sideBarClass = showSidebar ? ' show-sidebar' : ' mini-sidebar';

  function toggleSideBar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className={'page-wrapper !bg-customDarkBg1 ' + sideBarClass} id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
      data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar toggleSideBar={toggleSideBar} />
        <div className="body-wrapper !bg-customDarkBg1">
          <Navbar toggleSideBar={toggleSideBar} />
          {children}
        </div>
    </div>
  );
}

export default Auth(ReferDashboardLayout);
