import React from "react";
import Button from "./button";
function Header(){
    return <nav className="container">
            <div className="header-img">
                <img src="./images/brand_logo.png" />
            </div>
                <ul>
                    <li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
           <Button text="Login" bgColor="#D01C28"/>
        </nav>
}

export default Header