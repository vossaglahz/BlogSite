import React from "react";
import teslaLogo from "../../assets/images/logo.png"
import "./Logo.css";

export const Logo = () => {
    return (
        <div className="Logo">
            <img src={teslaLogo} alt="logo" />
        </div>
    );
};