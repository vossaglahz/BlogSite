import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { ReadMore } from "../ReadMore/ReadMore";

export const ContextReadMore = () => {
    const location = useLocation();
    const params = useParams();

    useEffect(() => {
        console.log(location, 'location');
        console.log(params, 'params');
    }, []);

    return (
        <>
            <ReadMore/>
        </>
    )
}