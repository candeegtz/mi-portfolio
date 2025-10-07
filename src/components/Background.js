import React from "react";
import "../css/Background.css";

import background1 from "../img/background1.jpeg";
import background2 from "../img/background2.jpeg";
import background3 from "../img/background3.jpeg";
import background4 from "../img/background4.jpeg";
import background5 from "../img/background5.jpeg";
import background6 from "../img/background6.jpeg";
import background7 from "../img/background7.jpeg";
import background8 from "../img/background8.jpeg";
import background9 from "../img/background9.jpeg";
import background10 from "../img/background10.jpeg";
import background11 from "../img/background11.jpeg";
import background13 from "../img/background13.jpeg";
import background14 from "../img/background14.jpeg";
import background15 from "../img/background15.jpeg";
import background16 from "../img/background16.jpeg";
import background12 from "../img/background12.jpeg"; 
import background17 from "../img/background17.jpeg";
import background18 from "../img/background18.jpeg";
import background19 from "../img/background19.jpeg";
import background20 from "../img/background20.jpeg";
import background21 from "../img/background21.jpeg";
import background22 from "../img/background22.jpeg";
import background23 from "../img/background23.jpeg";
import background24 from "../img/background24.jpeg";
import background25 from "../img/background25.jpeg";
import background26 from "../img/background26.jpeg";
import background27 from "../img/background27.jpeg";
import background28 from "../img/background28.jpeg";
import background29 from "../img/background29.jpeg";
import background30 from "../img/background30.jpeg"; 
import background31 from "../img/background31.jpeg";
import background32 from "../img/background32.jpeg";
import background33 from "../img/background33.jpeg";
import background34 from "../img/background34.jpeg";
import background35 from "../img/background35.jpeg";
import background36 from "../img/background36.jpeg";
import background37 from "../img/background37.jpeg";
import background38 from "../img/background38.jpeg";
import background39 from "../img/background39.jpeg";
import background40 from "../img/background40.jpeg";
import background41 from "../img/background41.jpeg";
import background42 from "../img/background42.jpeg";
import background43 from "../img/background43.jpeg";
import background44 from "../img/background44.jpeg";
import background45 from "../img/background45.jpeg";
import background46 from "../img/background46.jpeg";
import background47 from "../img/background47.jpeg";
import background48 from "../img/background48.jpeg";
import background49 from "../img/background49.jpeg";
import background50 from "../img/background50.jpeg";
import background51 from "../img/background51.jpeg";
import background52 from "../img/background52.jpeg";
import background53 from "../img/background53.jpeg";
import background54 from "../img/background54.jpeg";
import background55 from "../img/background55.jpeg";

const images = [background1, background2, background3, background4, background5, 
    background6, background7, background8, background9, background10, background11, 
    background12, background13, background14, background15, background16, background17,
    background18, background19, background20, background21, background22, background23,
    background24, background25, background26, background27, background28, background29,
    background30, background31, background32, background33, background34, background35,
    background36, background37, background38, background39, background40, background41,
    background42, background43, background44, background45, background46, background47,
    background48, background49, background50, background51, background52, background53,
    background54, background55];

function shuffle(array) {
    // Algoritmo de Fisher-Yatess
    const arr = [...array]; 
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export const Background = () => {
    const shuffledImages = shuffle(images);
    return(
        <div className="background-grid">
            {shuffledImages.map((img, index) => (
                <div className="img-square" key={(index)}>
                    <img src={img} alt=""/>
                </div>
            ))}
        </div>
    );
};