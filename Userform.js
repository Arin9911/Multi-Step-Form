import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormUserPersonalDetails from './FormUserPersonalDetails';
import Confirm from './Confirm'
import Success from './Success';

class Userform extends Component {
   state={
       step:1,
       firstname:'',
       lastname:'',
       email:'',
       occupation:'',
       city:'',
       bio:''
   }

   //For the Next Step method

   nextStep = () =>{
       const { step } = this.state;
       this.setState({
           step: step + 1
       })
   }

      //For the Prev Step method

      prevStep = () =>{
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    //Handling Input Field Change

    handleInputChange = input => e =>{
        this.setState({[input]:e.target.value});
    }

    render() {

       const { step } = this.state;
       const { firstname,lastname,email,occupation,city,bio} = this.state;
       const values =  { firstname,lastname,email,occupation,city,bio }

       switch (step){
          case 1:
              return (
                  <FormUserDetails 
                   nextStep ={this.nextStep}
                   handleInputChange ={this.handleInputChange}
                   values ={values}
                  />
              )
          case 2:
            return (
                <FormUserPersonalDetails 
                 nextStep ={this.nextStep}
                 prevStep={this.prevStep}
                 handleInputChange ={this.handleInputChange}
                 values ={values}
                />
            )
              
          case 3:
            return (
                <Confirm
                 nextStep ={this.nextStep}
                 prevStep={this.prevStep}
                 values ={values}
                />
            )
         

          case 4:
              return (<Success />)    
       }
    }
}

export default Userform
