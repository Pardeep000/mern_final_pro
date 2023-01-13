import React from 'react'
import '../styles/NavbarStyle.css';
// 
export default function Navbar() {
    return (
        <>
            <div className="Navbar">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerUser">Create a User</button>
                <div class="text-light bg-dark px-5"><h2>Exercise Tracker App</h2></div>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                            <form action="">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">User Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" name='uname' placeholder="Steven Smith" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" name='uemail' placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleFormControlInput1" name='upassword' placeholder="******" />
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
