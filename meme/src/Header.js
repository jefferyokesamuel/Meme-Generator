import React from 'react';
import troll from './sasuke-troll.png'

export default function Header() {
    return (
        <header>
            <img src={troll}/>
            <h1>Header</h1>
        </header>
    )
}