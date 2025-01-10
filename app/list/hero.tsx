import { JSX } from "react";
import { LuLinkedin, LuGithub, LuFacebook, LuInstagram } from "react-icons/lu";


// Subtitle - Type
const time = 2000;
export const subTitle = [
    "I am Frontend Web Developer",
    time,
    "I am MERN Stack Enthusiast",
    time,
    "I am Full Stack Web Developer",
    time,
];


// Social Media Icons
export const socialIcons: JSX.Element[] = [
    <LuLinkedin key={"linkedin"}/>,
    <LuGithub key={"github"}/>,
    <LuFacebook key={"facebook"}/>,
    <LuInstagram key={"instagram"}/>
];