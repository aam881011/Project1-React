import React from "react";
import { Link } from "./style";

export default function NavLinks ({ navLink, navText, color }){
    return <Link style={{color: color}} href={navLink}>{navText}</Link>;
}
