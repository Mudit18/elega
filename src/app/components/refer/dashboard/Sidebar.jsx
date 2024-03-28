import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Sidebar(props) {
  return (
    <aside className="left-sidebar !border-customDarkBg2">
      <div className="bg-customDarkBg2">
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <Link href="/" className="text-nowrap logo-img flex items-center gap-3">
            <Image src="/logo.png" width="28" height="28" alt="" />
            <span className='text-white font-bold text-lg'>Elega</span>
          </Link>
          <div onClick={() => { props.toggleSideBar() }} className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8"></i>
          </div>
        </div>
        <nav className="sidebar-nav h-screen pl-6 pr-6" data-simplebar="">
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu text-white">Home</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" href="/refer/dashboard" aria-expanded="false">
                <span>
                  <i className="ti ti-layout-dashboard text-white"></i>
                </span>
                <span className="hide-menu text-white">My Referrals</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" href="/refer/dashboard/new" aria-expanded="false">
                <span>
                  <i className="ti ti-user-plus text-white"></i>
                </span>
                <span className="hide-menu text-white">New Referral</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu text-white">JOBS</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" href="/refer/dashboard/jobs" aria-expanded="false">
                <span>
                  <i className="ti ti-file-description text-white"></i>
                </span>
                <span className="hide-menu text-white">Apply for Jobs</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu text-white">PROFILE</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" href="/refer/dashboard/profile" aria-expanded="false">
                <span>
                  <i className="ti ti-user text-white"></i>
                </span>
                <span className="hide-menu text-white">My Profile</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
