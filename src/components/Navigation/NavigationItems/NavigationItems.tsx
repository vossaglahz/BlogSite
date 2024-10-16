import React from "react";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";


export const NavigationItems = () => {

    return (
        <ul className="NavigationItems">
            <NavigationItem to="/all" end>
                Home
            </NavigationItem>
            <NavigationItem to="/submit" end>
                Add
            </NavigationItem>
            <NavigationItem to="/about" end>
                About
            </NavigationItem>
            <NavigationItem to="/contacts" end>
                Contacts
            </NavigationItem>
        </ul>
    )
};