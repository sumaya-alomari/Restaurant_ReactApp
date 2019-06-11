import React  from 'react'
import './List.css';
import Item from '../Item/Item';



  
const List=(props)=>{
   
  
      return (
        
             props.Menu.map((item,index) => {
            return(
            <Item  
              key={item.itemId} 
              name={item.itemDesc}
              image={item.itemImage} 
              price={item.itemPrice} 
              selected={props.selected}
              handleselect={()=>props.handleselect(index)}
              /> )
            })

         

           
          
       
      );
    }
 
 export default List;