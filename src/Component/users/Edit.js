// //edit button  open edit modal....put call

// //make base url
// //validation [form form].
// //form empty after post
// //exc. handling[try ...catch]
// //proper error msg []
// //id repete show alert,
// //table limit,
// //in table provde search option [on name basis]
// //after click downlode cv []
// //responsive ui
// //use redux 
// //one component test case

import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import swal from 'sweetalert';

class Edit extends React.Component {
    constructor(props) {
       
        super(props);
        this.state = {
            // id      : null,
            // name    : "",
            // email   : "",
            // mobile  : "",
            empl:[]
        }; 
    }

    _handleOnchange = (e) => {
        console.log(e.target.value)
     this.setState({ ...this.state.empl,[e.target.name]: e.target.value })   
    }


    loadUser = async () => {
        var id = this.props.match.params.id;
        await axios.get(`http://localhost:3003/posts/${id}`)

            .then((response) => {
                this.setState({
                     empl: response.data   //Here assigned geted response to state array employee//now initial blank array updated
                     
                });

                console.log("loadUser get data", response)

            })
            .catch(e => {
                console.log("Error in getting data", e)
            });
    }
    
     
    
     componentDidMount(e) {
        this.loadUser(e)
    }


   


    _handleSubmit = async (event) => {
        
        event.preventDefault();

        var id = this.props.match.params.id;
        await axios.put(`http://localhost:3003/posts/${id}`,this.state);
       // history.push("/") /*After post data page navigate to homepage */
      
       swal({title: "Updated successfully",text: "changes Done",icon: "success", button: "OK!",})
       
    }

     


    render() {
        return (

            <div>

                <div className="container">
                    <div className="w-75 mx-auto shadow p-5">
                        <h3 className="text-center mb-4 text-success">Employee Registration Form</h3>

                        <form onSubmit={this._handleSubmit}>
                            <div className="form-group">

                                <input type="text" className="form-control form-control-lg" placeholder="Enter your id" name="id" value={this.state.empl.id} onChange={this._handleOnchange}></input>
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Enter your Name" name="name" value={this.state.empl.name} onChange={this._handleOnchange}></input>
                            </div>

                            <div className="form-group">
                                <input type="email" className="form-control form-control-lg" placeholder="Enter your email" name="email" value={this.state.empl.email} onChange={this._handleOnchange}></input>
                            </div>

                            <div className="form-group">
                                <input type="mobile" className="form-control form-control-lg" placeholder="Enter your Mobile" name="mobile" value={this.state.empl.mobile} onChange={this._handleOnchange}></input>
                            </div>

                            <button className="btn btn-warning btn-block" >Update</button>
                          

                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Edit;



// import axios from "axios";
// import React, {useState,useEffect} from "react";
// import { useHistory,useParams } from "react-router-dom/cjs/react-router-dom.min";


// const Edit = () => {

//     const history = useHistory(); /*its used for navigate after post so declared here*/

//     const {id} = useParams();
    

//     const[user, setUser] = useState({

//         name: "",
//         username:"",
//         email:"",
//         phone:"",
//         website:"",

//     });

//     /* when input form fields need to be  change so create function for that*/

//     const onInputChange = e => {
//         console.log(e.target.value)
//         setUser({...user,[e.target.name]: e.target.value})
//     }

// /*---------------------*/
//     useEffect(()=>{
//         loadUser()
//     },[]);


//     /*this function for on update  button it will updatedata*/

//     const onSubmit =async (e) =>{
//         e.preventDefault();
//         await axios.put(`http://localhost:3003/posts/${id}`,user);
//         history.push("/") /*After post data page navigate to homepage */
//     }


//     /*Load previous posted data*/

//     const loadUser = async () => {
//         const result = await axios.get(`http://localhost:3003/posts/${id}`);
//         console.log(result);
//         setUser(result.data)
//     }


//     return(

//         <div className="container" >
//             <div className="w-75 mx-auto shadow p-5">
//                 <h2 className="text-center mb-4">Edit User</h2>
//                 <form onSubmit={e =>onSubmit(e)}>
//                     <div className="form-group">
//                         <input type="text" className="form-control form-control-lg" placeholder="Enter Your Name" name="name" value={user.name} 
//                         onChange={e => onInputChange(e)}/>   {/*onChange={e => onInputChange(e)}====its when change then call */}
//                     </div>
// <br></br>
//                     <div className="form-group">
//                         <input type="text" className="form-control form-control-lg" placeholder="Enter Your username" name="username" value={user.username}
//                         onChange={e => onInputChange(e)}/>
//                     </div>
//                     <br></br>

//                     <div className="form-group">
//                         <input type="email" className="form-control form-control-lg" placeholder="Enter Your email" name="email" value={user.email} 
//                         onChange={e => onInputChange(e)}/>
//                     </div>
// <br></br>
//                     <div className="form-group">
//                         <input type="text" className="form-control form-control-lg" placeholder="Enter Your Mobile" name="phone" value={user.phone}
//                         onChange={e => onInputChange(e)}/>
//                     </div>
//                     <br></br>
//                     <div className="form-group">
//                         <input type="text" className="form-control form-control-lg" placeholder="Enter Your website" name="website" value={user.website}
//                         onChange={e => onInputChange(e)} />
//                     </div>
//                     <br></br>
//                     <button className="btn btn-warning btn-block">Update</button>
//                 </form>
            
//             </div>
            
//         </div>

//     );
// };

// export default Edit;

   