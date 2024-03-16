import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Navbar(props) {
    const { data: session } = useSession();
    const [showUserDropDown, setShowUserDropDown] = useState(false);

    return (
        <div className="app-header !px-0 !border-b-2 !border-zinc-800">
            <nav className="navbar navbar-expand-lg navbar-dark w-full bg-customDarkBg1">
                <ul className="navbar-nav">
                    <li className="nav-item d-block d-xl-none">
                        <button className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" onClick={() => { props.toggleSideBar() }}>
                            <i className="ti ti-menu-2"></i>
                        </button>
                    </li>
                    <li className="nav-item pl-6 flex items-center">
                        <i className="ti ti-layout-dashboard text-xl text-white"></i>
                        <span className="text-white text-sm sm:text-xl font-bold pl-4">Dashboard</span>
                    </li>
                </ul>
                <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
                    <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                        <li className="nav-item dropdown">
                            <button className="nav-link nav-icon-hover" id="drop2" data-bs-toggle="dropdown"
                                aria-expanded="false" onClick={() => { setShowUserDropDown(!showUserDropDown) }}>
                                <Image src={session?.user ? session?.user?.picture : "/user-1.jpg"} alt="" width="35" height="35" className="rounded-circle" />
                            </button>
                            {showUserDropDown &&
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up !bg-customDarkBg2 d-block right-0" aria-labelledby="drop2">
                                    <div className="message-body flex justify-center items-center flex-col px-2">
                                        <a href="/refer/dashboard/profile" className="d-flex align-items-center gap-2 justify-center items-center px-4 py-2">
                                            <i className="ti ti-user fs-6 text-white"></i>
                                            <p className="mb-0 fs-3 text-white">My Profile</p>
                                        </a>
                                        <button onClick={() => { signOut() }} className="btn w-full text-white bg-primary mt-2 d-block">Logout</button>
                                    </div>
                                </div>
                            }
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}
