import React from "react";

function Button(props){
    return <button style={{backgroundColor: props.bgColor,color:props.color}}>{props.text}</button>
}

export default Button;