import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Header = () => {

    const [isToogle, setToogle] = useState(0)
    const location = useLocation();

    useEffect(() => {
        location.pathname == '/' ? document.body.className = "home" : document.body.className = location.pathname.replace(/\//g,'');
        return () => { document.body.className = false }
      }, [location.pathname])
    return(
        <header className="primary-header flex">
            <div>
                <img src={process.env.PUBLIC_URL+'/assets/shared/logo.svg'} className="logo"/>
            </div>
            <button className="mobile-nav-toogle" aria-expanded={isToogle} aria-controls="primary-navigation" onClick={() => setToogle(!isToogle)}></button>
            <nav>
                <ul id="primary-navigation" className="primary-navigation underline-indicators flex" data-visible={isToogle}>
                    <NavLink to="/" activeClassName="active" className="ff-sans-cond text-white uppercase letter-spacing-2"><span>00</span>home</NavLink>
                    <NavLink to="destination" activeClassName="active" className="ff-sans-cond text-white uppercase letter-spacing-2"><span>01</span>destinations</NavLink>
                    <NavLink to="crew" activeClassName="active" className="ff-sans-cond text-white uppercase letter-spacing-2"><span>02</span>crew</NavLink>
                    <NavLink to="technology" activeClassName="active" className="ff-sans-cond text-white uppercase letter-spacing-2"><span>03</span>technology</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header