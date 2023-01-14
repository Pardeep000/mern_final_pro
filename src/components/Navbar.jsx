import React,{useEffect} from 'react'
import '../styles/NavbarStyle.css';
//
import { useSelector, useDispatch } from "react-redux";
import { registerUser,readAllUsers } from "../state/reducer/userReducer";
import { clearSmsg } from "../state/reducer/userReducer";
//
export default function Navbar() {
    //
    let userstatus = useSelector((e) => e.userdata);
    const dispatch = useDispatch();
    //
    let handleRegisterUser = (e) => {
        e.preventDefault()
        let dataArray = {}
        let formdata = new FormData(e.target)
        for (let [key, value] of formdata.entries()) {
            dataArray[key] = value
        }
        console.log('dataArray=>', dataArray)
        //
        dispatch(registerUser(dataArray));
        // e.target.reset()
    }
    //
    let handleReadUsers = ()=>{
        console.log('clicked users')
        dispatch(readAllUsers())

    }
    //
    useEffect((e) => {
        //alert for signup messages
        if (userstatus.signupmsg !== "") alert(`${userstatus.signupmsg}`);
        if (userstatus.signupmsg === "User is created") {
          dispatch(clearSmsg());
        }
        //
      });
    return (
        <>
            <div className="Navbar">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerUser">Create a User</button>
                <div class="text-light bg-dark px-5"><h2>Exercise Tracker App</h2></div>
                <div className="dropdown">
                    <button onClick={handleReadUsers} className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Registered Users
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">User1</a></li>
                        <li><a className="dropdown-item" href="#">User2</a></li>
                        <li><a className="dropdown-item" href="#">User3</a></li>
                    </ul>
                </div>
            </div>
            {/* register user modal */}
            <div class="modal fade" id="registerUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Register User</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="" onSubmit={handleRegisterUser}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">User Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" name='name' placeholder="Steven Smith" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" name='email' placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleFormControlInput1" name='password' placeholder="******" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control" id="exampleFormControlInput1" name='cpassword' placeholder="******" />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
