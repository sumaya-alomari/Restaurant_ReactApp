import React, { Component } from 'react';
import Axios from 'axios';
import './Menu.css';
//import {Route,Link} from 'react-router-dom';
import List from '../../Components/List/List';


class Menu extends Component {

  state = {
    Menu: [],
    selected: false,
    checkedArray: [],
    Sum: 0

  }



  postMyNewData = () => {

    console.log('hi');
    let sData = {}


    this.state.checkedArray.map((item, index) => {
      sData = {
        orderUserName: "sumaya",
        orderItemId: item[0].itemId,
        orderPrice: item[0].itemPrice
      }


    });
    console.log(sData);


    Axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/post', sData)
      .then(response => {
        console.log(response)
      })


  }


  componentDidMount() {
    Axios.get('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/menu')
      .then(response => {

        const list = response.data
        const updateList = list.map((item) => {
          return { ...item }

        });

        this.setState({ Menu: updateList })
      })

  }



  handleSelect = (id) => {
    //remove the checked item
    console.log('id:', id);

    const currentData = [...this.state.Menu]
    const obj = currentData.splice(id, 1);
    console.log('[app.js]currentData: ', currentData);
    console.log('[app.js] obj:', obj);
    //Array of checked items
    this.state.checkedArray.push(obj);
    console.log('this.state.checkedArray', this.state.checkedArray)
    //Find the sumation of bill
    let sum1 = [];
    this.state.checkedArray.map((sum, index) => {
      console.log('index:', index);
      console.log('[app.js] this.state.checkedArray:', this.state.checkedArray);
      console.log('[app.js] sum:', sum);


      return (
        sum1.push(sum[0].itemPrice)
      )

    })
    let total = 0;
    for (let i = 0; i < sum1.length; i++) {
      total = total + sum1[i];
    }
    this.setState({ Sum: total });
    console.log(this.state.Sum);
    console.log('[app.js]checkedArray', this.state.checkedArray);
  }

  render() {


    return (

<div className='Menu'>
      <div>
              
                  <List
                      Menu={this.state.Menu}
                      //selected={this.state.selected}
                      handleselect={this.handleSelect}
                  />
             
          </div>
     

          <div >
            <fieldset>
              <legend >BILL</legend>
              <h2 >Total Price</h2>
              <input  type="number" value={this.state.Sum} readOnly></input>
              <button  id="b1" onClick={this.postMyNewData}>Accept</button>
              
              <img className="billImg" src={require('../../Contaniers/MenuList/b1.png')}></img>
              <p>*Our prices includes all taxes and fees</p>
            </fieldset>
         
               </div > 
               </div>
      
     
        
               
                       
        
                   

    )

    
   
  }

}


export default Menu;

