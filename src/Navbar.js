import React from "react";
import { FaBars, FaTwitter } from 'react-icons/fa';
import {links, social} from './Data'
import logo from './logo.svg'


export default function Navbar(){
    return (
        <nav>
            <div className="logo-con">
                <img src={logo} alt='logo' className="logo"/>
                <FaBars className="menu-bar"/>
            </div>
            <div className="menu-con">
                <ul className="menu-unordered">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                </ul>
            </div>

            <div className="icon-con">
                <FaTwitter className="icon"/>
                <FaTwitter className="icon"/>
                <FaTwitter className="icon"/>
                <FaTwitter className="icon"/>
            </div>
        </nav>
    )
}