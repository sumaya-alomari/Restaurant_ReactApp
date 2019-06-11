import React  from 'react'
import './Bill.css';


const Bill=(props)=>{
    return (
        
        props.checkedArray.map((item,index) => {
       return(
        <div>
        <div className="Bill">
       <div>{item[0].itemDesc}</div> 
       <div className="price">{item[0].itemPrice}</div>
     
           </div > 
           </div>
       );
        })
    )
}

export default Bill;