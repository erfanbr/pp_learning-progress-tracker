'use client'
import React, {useEffect} from "react";
import {usePathname} from "next/navigation";
import navBarLinksMapping from "@/app/components/NavBar/NavBarLinksMapping";
import {IconType} from "react-icons";

export default function DynamicTitle() {
    const currentPath = usePathname();


    useEffect(() => {
            navBarLinksMapping.map((link) => {
                const isActive = link.href === currentPath;
                if (isActive) document.title = link.label + ' | StudyFlow';
            })

        }
    )
    return null;
}
