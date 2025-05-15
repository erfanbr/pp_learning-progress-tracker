import React from "react";
import SimpleEditPage from "@/app/components/pages/SimpleEditPage";
import {prisma} from "@/prisma/client";
import axios from "axios";

interface Props {
    params: { slug: string }
}

export default async function EditCateogryPage({params}: Props) {

    const url: string = `http://localhost:3000/api/categories/${params.slug}`;

    const response = await axios.get(url);
    const dataElement: { id: number; title: string } = response.data;


    return (
        <>
            <SimpleEditPage id={'Category'} apiURL={'categories'} backURL={'../'} dataElement={dataElement}/>
        </>
    );
}
