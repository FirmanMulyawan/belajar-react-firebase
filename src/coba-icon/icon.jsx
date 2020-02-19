// library 
import "./icon.css"
import React from "react"
import { FaPizzaSlice } from 'react-icons/fa';
import { IoIosKeypad } from 'react-icons/io';
import { MdFavorite } from 'react-icons/md';
import { TiBeer } from 'react-icons/ti';
import { FiChrome } from 'react-icons/fi';
import { GiHoodedAssassin } from 'react-icons/gi';
import { WiDaySnow } from 'react-icons/wi';
import { DiReact } from 'react-icons/di';




const App = props => {

    return (
        <div className="container">
            <FaPizzaSlice className="icon" />
            <IoIosKeypad className="icon" />
            <MdFavorite className="icon" />
            <TiBeer className="icon" />
            <FiChrome className="icon" />
            <GiHoodedAssassin className="icon" />
            <WiDaySnow className="icon" />
            <DiReact className="icon" />
        </div>
    )
}

export default App