import React from "react";
import { NavLink } from "react-bootstrap";

class Navbar extends React.Component {
    // constructor(props) {
    //     super(props);
    //     //this.state = { change: true };
    // }
    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">React_Crud</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link " aria-current="page" href ="/home">Home</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" href="/about">About</NavLink>
                                </li>
                                
                                <li className="nav-item">
                                <NavLink className="nav-link" href="/contact">Contact</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" href="/">Add Employee</NavLink>
                                </li>

                            </ul>

                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Navbar;