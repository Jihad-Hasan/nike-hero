import React from "react";
import Button from "./button";
function Hero(){
    return <main className="container">
        <div className="content">
            <h1>
            YOUR FEET DESERVE THE BEST
            </h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="button-group">
            <Button text="Shop Now" bgColor="#D01C28"/> 
            <Button text="Category" color="black" bgColor="transparent"/>
           
            </div>
            <div className="band-icon">
            <span>Also Available On</span>
            <img src="./images/shops.png" />
            </div>
        </div>
        <div className="hero-img">
            <img className="moveArrow" src="./images/shoe_image.png"/>
        </div>

    </main>
}

export default Hero;