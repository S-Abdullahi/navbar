import React, {useState, useRef, useEffect} from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { FaBehance, FaFacebook, FaLinkedin } from "react-icons/fa";
import { links, social } from "./Data";
import logo from "./logo.svg";

export default function Navbar() {
    const [show, setShow] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(()=>{
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if(show){
            linksContainerRef.current.style.height = `${linksHeight}px`
        } else{
            linksContainerRef.current.style.height = '0px'
        }
        
    }, [show])

  return (
    <nav>
      <div className="logo-con">
        <img src={logo} alt="logo" className="logo" />
        <FaBars className="menu-bar" onClick={()=>setShow(!show)}/>
      </div>
      <div className='menu-con' ref={linksContainerRef}>
        <ul className="menu-unordered" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
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
            <a key={id} href={url} className="icon">
              {icon}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
