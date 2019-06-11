import React, { Component } from 'react';
import './MenuList.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import AddItem from '../AddItem/AddItem';
import Menu from '../Menu/Menu';
import Contact from '../../Components/Contact/Contact';

class Menulist extends Component {

   


    render() {


        return (

            <div  >
                <nav>
                <div className='MenuList'>
                    <img className="headerImg" src={require('./san.jpg')}></img>
                    <ul>
                        <ol><img  src={require('./v5.png')}></img> </ol>
                       
                        <ol>
                            <NavLink to="/Menu/" exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#3e8e41'
                                    
                                }}> MENU
                              </NavLink></ol>

                        <ol><img src={require('./v2.png')}></img> </ol>
                      
                        <ol>
                            <NavLink to="/new-item/" exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#3e8e41'
                                
                                }}> ADDITEM
                              </NavLink></ol>
                        <ol><img src={require('./v4.png')}></img> </ol>
                       
                        <ol>
                            <NavLink to="/Contact/" exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#3e8e41'
                                    
                                }}> CONTACT
                              </NavLink></ol>

                        <ol><img src={require('./v3.png')}></img> </ol>
                    </ul>
                </div>
                </nav>
               
                
                    <Switch>
              <Route path="/Menu"  component={Menu}/>
              <Route path="/new-item"  component={AddItem}/>
              <Route path="/contact"  exact component={Contact}/> 

                   </Switch>
                   

            </div>
           
           
        );

       
                            }
                        }



export default Menulist;

