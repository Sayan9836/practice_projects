import React, { useState } from 'react'
import './style2.css'
const DropDown2 = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            <div className={clicked ? `navbar active` : `navbar`}>
                <ul className="sub_menu">
                    <li className='active'><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li className="dropdown1">
                        <a href="">Services</a>
                        <div className="sub_menu1">
                            <ul>
                                <li><a href="">SEO</a></li>
                                <li className='dropdown2'>
                                    <a href="">IOT</a>
                                    <div className="sub_menu2">
                                        <ul>
                                            <li><a href="">ABC</a></li>
                                            <li><a href="">DEF</a></li>
                                            <li><a href="">GHI</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="">Finance</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className='dropdown1'>
                        <a href="">Training</a>
                        <div className="sub_menu1">
                            <ul>
                                <li><a href="">SEO</a></li>
                                <li className='dropdown2'>
                                    <a href="">IOT</a>
                                    <div className="sub_menu2">
                                        <ul>
                                            <li><a href="">ABC</a></li>
                                            <li><a href="">DEF</a></li>
                                            <li><a href="">GHI</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="">Finance</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="">contact</a></li>
                    <li><a href="">Placement</a></li>
                    <li><a href="">clients</a></li>
                </ul>
            </div>
            <div className="hamburger">
                {
                    clicked ? (
                        <i className="fa-regular fa-circle-xmark " onClick={() => setClicked(false)}></i>
                    ) : (
                        <i className="fa-solid fa-bars " onClick={() => setClicked(true)}></i>
                    )
                }
            </div>
        </>
    )
}

export default DropDown2
