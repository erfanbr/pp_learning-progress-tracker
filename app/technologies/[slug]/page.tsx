import React from "react";
import SimpleEditPage from "@/app/components/pages/SimpleEditPage";
import axios from "axios";

interface Props {
    params: { slug: string }
}

export default async function EditTechnologyPage({params}: Props) {

    const url: string = `http://localhost:3000/api/technologies/${params.slug}`;

    const response = await axios.get(url);
    const dataElement: { id: number; title: string } = response.data;


    return (
        <>
            <SimpleEditPage id={'Technology'} apiURL={'technologies'} backURL={'../'} dataElement={dataElement}/>
        </>
    );
}
