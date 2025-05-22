'use client';
import React, {useState} from "react";
import Link from "next/link";
import {GiBookCover, GiPlatform } from "react-icons/gi";
import {MdLibraryBooks, MdSpaceDashboard, MdEvent, MdSpeakerNotes, MdSettingsApplications, MdCategory} from "react-icons/md";
import {CgPerformance} from "react-icons/cg";
import { IoHardwareChip } from "react-icons/io5";
import {usePathname} from "next/navigation";
import {IconType} from "react-icons";
import classNames from "classnames";


export default function NavBar() {
    const currentPath = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const sideBarLogoStyle = "w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

    const links = [
        {label: "Overview", href: "/", icon: MdSpaceDashboard},
        {label: "Courses", href: "/courses", icon: MdLibraryBooks},
        {label: "Platforms", href: "/platforms", icon: GiPlatform},
        {label: "Categories", href: "/categories", icon: MdCategory},
        {label: "Technologies", href: "/technologies", icon: IoHardwareChip},
        {label: "Schedule", href: "/schedule", icon: MdEvent},
        {label: "Performance", href: "/performance", icon: CgPerformance},
        {label: "Notes", href: "/notes", icon: MdSpeakerNotes},
        {label: "Settings", href: "/settings", icon: MdSettingsApplications},
    ]


    return (
        <>
            <button
                onClick={() => setIsSidebarOpen(prev => !prev)}
                type="button"
                className="fixed top-4 right-4 z-50 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Toggle sidebar</span>
                {isSidebarOpen ? (
                    // (X) icon
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        />
                    </svg>
                ) : (
                    // Hamburger icon
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z"
                        />
                    </svg>
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
                    <Link href="/" className="flex items-center mx-2 border-b-2 mb-3 pb-5"><GiBookCover
                        className={sideBarLogoStyle}/><span
                        className="mx-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Studyflow</span>
                    </Link>


                    <ul className="space-y-2 font-medium">
                        {links.map((link) => {
                            const isActive = link.href === currentPath;
                            const Icon: IconType = link.icon;

                            return (
                                <li key={link.href}>
                                    <Link onClick={() => setIsSidebarOpen(false)} href={link.href} key={link.label}
                                          className={classNames(
                                              "flex items-center p-2 text-gray-900 rounded-4xl dark:text-white hover:bg-gray-100 dark:hover:bg-primary-500 group",
                                              {
                                                  "dark:bg-primary-500": isActive,
                                                  "border-2 border-zinc-200": isActive
                                              }
                                          )}>
                                        <Icon
                                            className={classNames(
                                                "w-8 h-8 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white",
                                                {
                                                    "dark:text-zinc-100" : isActive,
                                                    "dark:text-gray-400" : !isActive
                                                }
                                            )}/>

                                        <span
                                            className={classNames(
                                                'ml-3',
                                                {
                                                    "text-zinc-100": isActive
                                                })}>{link.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </aside>
        </>
    );
}
