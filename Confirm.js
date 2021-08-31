import React, { Component } from 'react'
import './Confirm.css'

export class Confirm extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values:{firstname,lastname,email,occupation,city,bio} } = this.props;
        return (
            <div className="container">
            <div className="heading">Confirm User Data</div>
            <div className="main">
               <ul className="list">
                   <label className="label">FIRST NAME
                   <li className="item">{firstname}</li>
                   </label>
                   
                   <label className="label">LAST NAME
                   <li className="item">{lastname}</li>
                   </label>
                   
                   <label className="label">EMAIL
                   <li className="item">{email}</li>
                   </label>
                   
                   <label className="label">OCCUPATION
                   <li className="item">{occupation}</li>
                   </label>
                   
                   <label className="label">CITY
                   <li className="item">{city}</li>
                   </label>
                   
                   <label className="label">BIO
                   <li className="item">{bio}</li>
                   </label>
               </ul>
                  


                <div className="submain">
                    <button onClick={this.continue} className="cnt-btn">Continue</button>
                    <button onClick={this.back} className="back-btn">Back</button>
                </div>



            </div>
        </div>
        )
    }
}

export default Confirm
