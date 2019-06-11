import React from 'react'
import './Button.css'
const Button=(props)=>(
    <button
    disabled={props.disabled}
  
    onClick={props.clicked}>{props.children}</button>

);
export default Button;