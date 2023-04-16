import { Button } from "bootstrap";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { useLocation } from "react-router-dom";



class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };

    }

    load = async () => {
        await axios.get("http://localhost:3003/posts")

            .then((response) => {
                this.setState({
                    employees: response.data   //Here assigned geted response to state array employee//now initial blank array updated
                });

                // console.log("mount",response.data)

            })
            .catch(e => {
                console.log("Error in getting data", e)
            });

    }

    componentDidMount() {
        this.load()
    }


    //Delete method

    deleteUser = async (id) => {

        await axios.delete(`http://localhost:3003/posts/${id}`);
        this.load()

    }


    render() {
        const { employees } = this.state;  //here employee assigned as state

        return (

            <div>

                <h3 className="text-center mb-4">Employee Data</h3>

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Emp-Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // employee is array map here 
                            employees.map((emp) => (
                                <tr>

                                    <td className="text-dark">      {emp.id}</td>
                                    <td className="text-success"><b>{emp.name}</b></td>
                                    <td className="text-primary">   {emp.email}</td>
                                    <td>{emp.mobile}</td>
                                    <td>

                                        {/* <button onClick={()=> this.props.history.push('/signup')} ></button> */}
                                        <Link className="btn btn-outline-primary mx-2" type="submit" to={`/edit/${emp.id}`}>Edit</Link>

                                        <Link className="btn btn-danger mx-2"
                                            onClick={() => this.deleteUser(emp.id, swal({
                                                title: "Deleted successfully",
                                                text: "Deleted Permanently",
                                                icon: "warning",
                                                button: "OK!",
                                            }))}>Delete</Link>

                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default Home;























// swal({title: "Good job!",text: "You clicked the button!",icon: "success", button: "Aww yiss!",})
//delete ask confirm msg
/*swal({
    title: "Are you sure?",
    text: "Your will not be able to recover this imaginary file!",
    type: "warning",
    showCancelButton: true,
    confirmButtonClass: "btn-danger",
    confirmButtonText: "Yes, delete it!",
    closeOnConfirm: false
  },
  function(){
    swal("Deleted!", "Your imaginary file has been deleted.", "success");
  });*/