import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { Delete } from "../Delete/Delete";

export const ContextDelete = () => {
    const location = useLocation();
    const params = useParams();

    useEffect(() => {
        console.log(location, 'location');
        console.log(params, 'params');
    }, []);

    return (
        <>
            <Delete/>
        </>
    )
}