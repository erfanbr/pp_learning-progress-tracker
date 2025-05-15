import React from "react";
import SimpleEditPage from "@/app/components/pages/SimpleEditPage";
import {prisma} from "@/prisma/client";
import axios from "axios";

interface Props {
    params: { slug: string }
}

export default async function EditPlatformPage({params}: Props) {

    const url: string = `http://localhost:3000/api/platforms/${params.slug}`;

    const response = await axios.get(url);
    const dataElement: { id: number; title: string } = response.data;


    return (
        <>
            <SimpleEditPage id={'Platform'} apiURL={'platforms'} backURL={'../'} params={params} dataElement={dataElement}/>
        </>
    );
}
