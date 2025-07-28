import React, {useState} from "react";
import {IconType} from "react-icons";
import Link from "next/link";
import classNames from "classnames";
import navBarLinksMapping from "@/app/components/NavBar/NavBarLinksMapping";

interface Props {
    currentPath: string,
    setIsSidebarOpen: (open: boolean) => void;
}

export default function NavBarLinks({currentPath, setIsSidebarOpen}: Props) {
    const links = navBarLinksMapping;

    return (
        <>
            <ul className="space-y-2 font-medium">
                {links.map((link) => {
                    const isActive =
                        link.href === '/'
                            ? currentPath === '/'
                            : currentPath.startsWith(link.href);
                    const Icon: IconType = link.icon;

                    return (
                        <li key={link.href}>
                            <Link
                                onClick={() => setIsSidebarOpen(false)}
                                href={link.href}
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
                                            "dark:text-zinc-100": isActive,
                                            "dark:text-gray-400": !isActive
                                        }
                                    )}
                                />
                                <span className={classNames("ml-3", {
                                    "text-zinc-100": isActive
                                })}>
                                            {link.label}
                                        </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
