import React, { Component } from 'react'
import './FormUserDetails.css'


export class FormUserDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {

        const { values, handleInputChange } = this.props;

        return (
            <div className="container">
                <div className="heading">Enter User Details</div>
                <div className="main">
                    <input defaultValue={values.firstname} onChange={handleInputChange('firstname')} placeholder="First name" type="text" className="firstname" />
                    <input defaultValue={values.lastname} onChange={handleInputChange('lastname')} placeholder="Last name" type="text" className="lastname" />
                    <input defaultValue={values.email} onChange={handleInputChange('email')} placeholder="Email" type="text" className="email" />

                    <button onClick={this.continue} className="cnt-btn">Continue</button>


                </div>
            </div>
        )
    }
}

export default FormUserDetails
