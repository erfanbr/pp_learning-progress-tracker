'use client'
import React, {useEffect} from "react";
import {usePathname} from "next/navigation";
import navBarLinks from "@/app/components/NavBar/NavBarLinks";
import {IconType} from "react-icons";

export default function DynamicTitle() {
    const currentPath = usePathname();


    useEffect(() => {
            navBarLinks.map((link) => {
                const isActive = link.href === currentPath;
                if (isActive) document.title = link.label + ' | StudyFlow';
            })

        }
    )
    return null;
}
