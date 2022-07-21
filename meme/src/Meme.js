import React from "react";

export default function Meme() {
    return (
        <div className="main">
            <form className="inputs">
                <input className="meme-text" placeholder="Top Text"/>
                <input className="meme-text" placeholder="Bottom Text"/>

                <button className="meme-button">Get A New Meme Image</button>
            </form>
        </div>
    )
}