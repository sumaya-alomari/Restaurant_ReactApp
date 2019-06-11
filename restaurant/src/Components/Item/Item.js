import React from 'react';
import './Item.css';



const Item = (props) => {

  //if image in API eual null, will display another image
  let img;

 
  if (props.image === "null") {
    img = require('./item.jpg');
  }
  else {
    img = props.image;
  }

  
  return (


    <div>

     

      <div className="plans" >

        <div className="plan" >

          <div className="name">{props.name}</div>

          <div className="price">{props.price}</div>


          <div><img src={img} alt=""></img></div>

          <div><button onClick={props.handleselect}>ADD</button></div>
         {/* <div><a href="javascript:void(null);"  onClick={props.handleselect}>ADD</a></div> */}


        </div>
      </div>

    </div>
  );


}


export default Item;