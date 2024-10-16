import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { Editor } from "../Editor/Editor";

export const ContextEdit = () => {
    const location = useLocation();
    const params = useParams();

    useEffect(() => {
        console.log(location, 'location');
        console.log(params, 'params');
    }, []);

    return (
        <>
            <Editor/>
        </>
    )
}