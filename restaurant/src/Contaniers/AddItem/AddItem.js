import React, { Component } from 'react'
import classes from './AddItem.css'
import Axios from 'axios'
 import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'


class AddItem extends Component {
    state = {
        itemForm: {
            itemid: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Item Id'
                },
                value: '',
                validation: {
                    required: true
                },
                valid:false,
                touched:false
            },
            itemname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Item Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid:false,
                touched:false
            },
            itemprice: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Item Price'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 1,
                    maxLength: 5

                } ,
                valid:false,
                touched:false
            },
            // itemImage:{
            //     elementType:'img',
            //     elementConfig:{
            //         placeholder:'food image'
            //     },
            //     value:false,
            //     touched:false
            // }
           

        },
        Admin:false
    }

       


    submitForm = () => {
        console.log('Submit Data');
    }


    inputChangedHandler = (event, inputIdentifier) => {
        const ItemInformation = {
            ...this.state.itemForm
        };
        const updatedFormElement = {
            ...ItemInformation[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormElement.validation)
        updatedFormElement.touched=true;
        ItemInformation[inputIdentifier] = updatedFormElement;
 
        
        let formIsValid=true;
        for(let inputIdentifier in ItemInformation){
            formIsValid=ItemInformation[inputIdentifier].valid&&formIsValid;
        }

        console.log(formIsValid);
        this.setState({ itemForm:ItemInformation,formIsValid:formIsValid });

    }


    itemHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.itemForm) {
            formData[formElementIdentifier] = this.state.itemForm[formElementIdentifier].value;
        }
        const itemInfo = {
            itemData: formData

        }
        console.log(itemInfo)
       const itemJson = JSON.stringify(itemInfo);
       console.log(itemJson);
        
        Axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/postmenu',itemJson)
        .then(response=>{
            this.setState({loading:false})
            this.props.history.push('/')
            console.log(response)
        }).catch(error=>{
            this.setState({loading:false})
        })
    }


    checkValidity (value, rules){
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== ''&&isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength&&isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength&&isValid;
        }
        console.log(isValid)
        return isValid;
    }
      
    checkpassword(event){
        if(event.target.value=="12345")
        {
         this.setState({Admin:true});
        }
    }
    
    render() {
        const password="12345";
        const formArrayElement = [];
        for (let key in this.state.itemForm) {
            formArrayElement.push({
                id: key,
                config: this.state.itemForm[key]
            })
        }
    
        let form = (
            <form onSubmit={this.itemHandler}>
                {formArrayElement.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />

                ))}
                 <div>
            <input type="text" placeholder="Admin Password" onChange={(event)=>this.checkpassword(event)}></input>
                 </div>
                <Button  btnType="Success" disabled={!this.state.formIsValid&&!this.state.Admin}>Submit</Button>
               
            </form>
        );

        return (
            <div className={classes.ItemInformation}>
                <h2 className="header">Please Enter Item Information </h2>
                {form}
            </div>
        )
    }
}
export default AddItem;