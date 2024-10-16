import React from "react";
import { ToolBar } from "../Navigation/ToolBar/ToolBar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
    return (
        <div className="main-container">
            <ToolBar/>
            <div>
                <main className="Layout-Content">
                    <Outlet/>
                </main>
            </div>
        </div>
    );
};