// pagesController.js

import React from "react";
import {Outlet} from "react-router";
import {Link, useLocation} from "react-router-dom";

export function Home(){
    return(
        <div id="main-title">
            <h1>Spore Site</h1>
            <nav>
                <Link to="about">About </Link>
                <Link to="services">Services </Link>
                <Link to="contact/us">Contact </Link>
            </nav>
            <Outlet/>
        </div>
    );
}

export function About(){
    return(
        <div id="about">
            <h2>About page</h2>
        </div>
    )
}

export function Services(){
    return(
        <div id="service">
            <h2>Provided service</h2>
        </div>
    )
}
export function Contact(){
    return(
        <div id="contact">
            <h2>How to contact us?</h2>
            <nav>
                <Link to="pl">PL</Link>
                <Link to="us">US</Link>
                <Link to="de">DE</Link>
            </nav>
            <Outlet/>
        </div>
    )
}

export function Error(){
    return(
        <div>NOT FOUND :( {useLocation().pathname}</div>
    )
}

export function Us(){
    return(
        <div>CONNTACT HERE</div>
    )
}

export function Pl(){
    return(
        <div>KONTAKTUJ TUTAJ</div>
    )
}

export function De(){
    return(
        <div>KONTAKT HIER</div>
    )
}