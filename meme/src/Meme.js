import React from "react";
import memes from "./Memedata"

export default function Meme() {
    function getAddress () {
        const memesData = memes.data.memes
        let randNum = Math.floor(Math.random() * memesData.length);
        const url = memesData[randNum].url
        console.log(url)
    }
    return (
        <div className="form">
            <input className="meme-text" placeholder="Top Text"/>
            <input className="meme-text" placeholder="Bottom Text"/>

            <form className="inputs">
                
                <button className="meme-button" onClick={getAddress}>Get A New Meme Image</button>
            </form>
        </div>
    )
}