'use client';
import React, {useState} from "react";
import Link from "next/link";
import {TbLamp2} from "react-icons/tb";
import {useRouter} from 'next/router';
import {GiBookCover, GiFlexibleLamp, GiPlatform} from "react-icons/gi";
import {
    MdLibraryBooks,
    MdSpaceDashboard,
    MdEvent,
    MdSpeakerNotes,
    MdSettingsApplications,
    MdCategory, MdEdit
} from "react-icons/md";
import {CgPerformance} from "react-icons/cg";
import {IoHardwareChip} from "react-icons/io5";
import {usePathname} from "next/navigation";
import {RxAvatar, RxHamburgerMenu} from "react-icons/rx";
import {MdClose} from "react-icons/md";
import {IconType} from "react-icons";
import classNames from "classnames";
import navBarLinksMapping from "@/app/components/NavBar/NavBarLinksMapping";
import {useSession} from "next-auth/react";
import AuthStatus from "@/app/AuthStatus";
import NavBarLinks from "@/app/NavBarLinks";


export default function NavBar() {
    const currentPath = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {status, data: session} = useSession();


    const sideBarLogoStyle = "w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"



    return (
        <>

            <button
                onClick={() => setIsSidebarOpen(prev => !prev)}
                type="button"
                className="fixed top-4 right-4 z-50 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Toggle sidebar</span>
                {isSidebarOpen ? (
                    // Close icon
                    <MdClose className={'w-8 h-8 '}/>
                ) : (
                    // Hamburger icon
                    <RxHamburgerMenu className={'w-8 h-8 '}/>
                )}
            </button>


            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/60 sm:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
            <aside
                id="default-sidebar"
                className={classNames(
                    "fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-gray-50 dark:bg-gray-800 sm:translate-x-0",
                    {
                        "-translate-x-full": !isSidebarOpen,
                        "translate-x-0": isSidebarOpen,
                    }
                )}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">


                    {/*LOGO*/}
                    <Link href="/" className="flex items-center mx-2 border-b-2 mb-3 pb-5"><TbLamp2
                        className={sideBarLogoStyle}/><span
                        className="mx-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Studyflow</span>
                    </Link>

                    {/* User Info */}
                    <AuthStatus
                        status={status}
                        session={session}
                    />


                    {/* NavBar Links */}
                    <NavBarLinks
                        currentPath={currentPath}
                        setIsSidebarOpen={() =>setIsSidebarOpen(false)}
                    />




                </div>
            </aside>
        </>
    );
}
