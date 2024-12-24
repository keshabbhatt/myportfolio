import React from 'react'
import "./Navbar.css"
import Toggle from '../Toggle/Toggle'
import { Link } from "react-scroll"
import Upwork from "../../img/Upwork.png"

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-left">
                <div className="nav-name">Kunaal</div>
                <Toggle />
            </div>
            <div className="nav-right">
                <div className="nav-links">
                    <ul>
                        <li>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true} className='navlink'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true} className='navlink'>
                                Serivces
                            </Link>
                        </li>

                        <li>
                            <Link to="portfolio" spy={true} smooth={true} className='navlink'>
                                Protfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="testimonial" spy={true} smooth={true} className='navlink'>
                                Testimonial
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to='contact' spy={true} smooth={true}>
                    <button className="navBtn">Contact</button>
                </Link>
            </div>
            <a href={"https://www.linkedin.com/in/keshab-raj-bhatt-64b083253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target='__blank'>
                <img src={Upwork} alt="" className='Upwork' />
            </a>
        </div>
    )
}

export default Navbar