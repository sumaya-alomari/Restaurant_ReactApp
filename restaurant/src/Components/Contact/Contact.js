
import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {

    render() {

        return (

            <div>
                {/* <h2>Contact US</h2> */}
                <img src={require('./c3.png')}></img>
                <form className="form">
                   
                       
                <p >
                        <input type="text" name="name" id="name" placeholder="Name" />
                        
                    </p>
                    <p >
                        

                        <input type="text" name="email" id="email" placeholder="mail@example.com" />
                        
                    </p>
                    <p >
                        

                        <input type="text" name="web" id="web" placeholder="www.example.com" />
                        
                    </p>
                    <p >
                        <textarea name="text" placeholder="Write something to us" />
                      </p>
                <p className="submit">
                    <input  type="submit" value="Send" />
                </p>
</form>
</div >


    )
    }


}
export default Contact;
