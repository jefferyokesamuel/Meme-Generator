import React from 'react';
import troll from './troll.png'

export default function Header() {
    return (
        <header className='header'>
            <img className='troll' src={troll}/>
            <h1 className='header-title'>Meme Generator</h1>
            <h4 className='header-text'>Pick an image and create dope stuff</h4>
        </header>
    )
}