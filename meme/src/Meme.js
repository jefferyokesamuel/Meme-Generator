import React from "react";

export default function Meme() {
    return (
        <div>
            <form className="inputs">
                <input className="meme-text"/>
                <input className="meme-text-bottom"/>
                <button>Get A New Meme Image</button>
            </form>
        </div>
    )
}