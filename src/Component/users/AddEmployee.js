import React from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: "",
            email: "",
            mobile: "",
            empl: []
        };
    }

    _handleOnchange = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    }


    _handleSubmit = async (event) => {

        console.log(this.state)
        event.preventDefault();

        await axios.post("http://localhost:3003/posts", this.state);
        //history.push("/") /*After post data page navigate to homepage */
        // form.reset()  
        swal({title: "Employee added successfully",text: "changes Done",icon: "success", button: "OK!",})

    }



    render() {
        return (

            <div>

                <div className="container">
                    <div className="w-75 mx-auto shadow p-5">
                        <h3 className="text-center mb-4">Employee Registration Form</h3>

                        <form onSubmit={this._handleSubmit}>
                            <div className="form-group">

                                <input type="text" className="form-control form-control-lg" placeholder="Enter your empid" name="id" value={this.state.id} onChange={this._handleOnchange}></input>
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Enter your Name" name="name" value={this.state.name} onChange={this._handleOnchange}></input>
                            </div>

                            <div className="form-group">
                                <input type="email" className="form-control form-control-lg" placeholder="Enter your email" name="email" value={this.state.email} onChange={this._handleOnchange}></input>
                            </div>

                            <div className="form-group">
                                <input type="number" className="form-control form-control-lg" placeholder="Enter your Mobile" name="mobile" value={this.state.mobile} onChange={this._handleOnchange}></input>
                            </div>
                            

                            <button className="btn btn-primary btn-block" >Submit</button>


                        </form>
                    </div>
                </div>

            </div>

        )
    }
}

export default AddEmployee;







/*
phone number with country code 
<div className="form-group">
<PhoneInput
            className="form-control form-control-lg"
             placeholder="Enter phone number"
            value={this.state.mobile}
            onChange={this._handleOnchange}/>
</div>
*/