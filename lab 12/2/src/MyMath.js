import React from "react";

function getURLAtributes(){
    const sPage = window.location.search.substring(1);
    let sURLVar = sPage.split("&");
    sURLVar = sURLVar.map(element => (element.replace("x", "")));
    sURLVar = sURLVar.map(element => (element.replace("y", "")));
    sURLVar = sURLVar.map(element => (element.replace("=", "")));
    sURLVar = sURLVar.map(element => (parseInt(element)));
    return sURLVar;
}
export function Add(){
    const values = getURLAtributes();
    return(
        <div id={"answer"}>
            {values[0] + values[1]}
        </div>
    )
}
export function Sub(){
    const values = getURLAtributes();
    return(
        <div id={"answer"}>
            {values[0] - values[1]}
        </div>
    )
}
export function Mul(){
    const values = getURLAtributes();
    return(
        <div id={"answer"}>
            {values[0] * values[1]}
        </div>
    )
}
export function Div(){
    const values = getURLAtributes();
    return(
        <div id={"answer"}>
            {values[1] == 0 ? "Nie moge pokazać" : values[0] / values[1]}
        </div>
    )
}