import React, { Component } from 'react'
import './FormUserPersonalDetails.css'


class FormUserPersonalDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        const { values, handleInputChange } = this.props;

        return (
            <div className="container">
                <div className="heading">Enter User Personal Details</div>
                <div className="main">
                    <input defaultValue={values.occupation} onChange={handleInputChange('occupation')} placeholder="Occupation" type="text" className="occupation" />
                    <input defaultValue={values.city} onChange={handleInputChange('city')} placeholder="city" type="text" className="city" />
                    <input defaultValue={values.bio} onChange={handleInputChange('bio')} placeholder="Bio" type="text" className="bio" />

                    <div className="submain">
                        <button onClick={this.continue} className="cnt-btn">Continue</button>
                        <button onClick={this.back} className="back-btn">Back</button>
                    </div>



                </div>
            </div>
        )
    }
}

export default FormUserPersonalDetails
