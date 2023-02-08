import React, {useState} from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { FaBehance, FaFacebook, FaLinkedin } from "react-icons/fa";
import { links, social } from "./Data";
import logo from "./logo.svg";

export default function Navbar() {
    const [show, setShow] = useState(false)
  return (
    <nav>
      <div className="logo-con">
        <img src={logo} alt="logo" className="logo" />
        <FaBars className="menu-bar" onClick={()=>setShow(!show)}/>
      </div>
      <div className={`menu-con ${show && 'show'}`}>
        <ul className="menu-unordered">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li>
                <a href="#">{text}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="icon-con">
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <a href={url} className="icon">
              {icon}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
