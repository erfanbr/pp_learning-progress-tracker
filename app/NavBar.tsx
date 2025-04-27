'use client';
import React from "react";
import Link from "next/link";
import {GiBookCover} from "react-icons/gi";
import {MdLibraryBooks, MdSpaceDashboard, MdEvent, MdSpeakerNotes, MdSettingsApplications} from "react-icons/md";
import {CgPerformance} from "react-icons/cg";
import {usePathname} from "next/navigation";


export default function NavBar() {
    const currentPath = usePathname();
    // console.log(currentPath);

    const sideBarIconStyle = "w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"

    const links = [
        {label: "Overview", href: "/", icon: <MdSpaceDashboard className={sideBarIconStyle}/>},
        {label: "Courses", href: "/courses", icon: <MdLibraryBooks className={sideBarIconStyle}/>},
        {label: "Schedule", href: "/schedule", icon: <MdEvent className={sideBarIconStyle}/>},
        {label: "Performance", href: "/performance", icon: <CgPerformance className={sideBarIconStyle}/>},
        {label: "Notes", href: "/notes", icon: <MdSpeakerNotes className={sideBarIconStyle}/>},
        {label: "Settings", href: "/settings", icon: <MdSettingsApplications className={sideBarIconStyle}/>},
    ]


    return (
        <>
            {/*TODO: find a way to make button work in mobile version */}
            {/*<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"*/}
            {/*        aria-controls="default-sidebar" type="button"*/}
            {/*        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">*/}
            {/*    <span className="sr-only">Open sidebar</span>*/}
            {/*    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"*/}
            {/*         xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path clip-rule="evenodd" fill-rule="evenodd"*/}
            {/*              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>*/}
            {/*    </svg>*/}
            {/*</button>*/}


            <aside id="default-sidebar"
                   className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">


                    {/*LOGO*/}
                    <Link href="/" className="flex items-center mx-2 border-b-2 mb-3 pb-5"><GiBookCover
                        className={sideBarIconStyle}/><span
                        className="mx-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Studyflow</span>
                    </Link>


                    <ul className="space-y-2 font-medium">
                        {links.map(link => (
                            <Link key={link.href} href={link.href}
                                // className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group
                                  ${link.href === currentPath ? 'bg-gray-700' : 'null'}`}>
                                {link.icon}
                                <span
                                    className={`ms-3 ${link.href === currentPath ? 'text-amber-400' : 'text-zinc-200'}`}>{link.label}</span>
                            </Link>

                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
}
