import React from 'react';
import './Item.css';



const Item=(props)=>{
      
  
  
 
      return (
       

        <div>

        <div ></div>

            <div className="plans" >

            <div className="plan" >

                <div className="name">{props.name}</div>

                <div className="price">{props.price}</div>
             
  
           <div><img  src= {require('./item.jpg')}></img></div>
             
{/* 
   <div><img  src={props.image}  onerror="this.src = {require('./item.jpg')};"></img></div> */}
                    {/* <div><img scr={props.image}></img></div>  */}
    
                   <div><button onClick={props.handleselect}>ADD</button></div>
                
                  
            </div>
            </div>

            </div>
      );
    }
  
  export default Item;