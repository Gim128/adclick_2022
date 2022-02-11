import React from 'react';
import '../assets/css/UserDashboard.css'

function UserDashboard() {
    return (
        <section className="user-dashboard">
            <div className="container-fluid text-body">
                <div className="row text-center bg-pic">
                    <div className="col-sm">
                        <h1 className="display-1 text-uppercase">MY PROFILE</h1>
                    </div>
                </div>
            </div>
            <div className="sidebar mx-2">
                <a className="active" href="#user">GENERAL SETTINGS</a>
                <a href="#Account">Account Summery</a>
                <a href="#Upgrade-Your-Plan"> Upgrade Your Plan</a>
                <a href="#Withdrawal">Withdrawal</a>
                <a href="#Refferral">Refferral</a>
            </div>

            <div className="content">
                <div className="box">
                    <div className="box-top">
                        <h1>Profile Picture</h1>
                    </div>
                    <div className="box-bottom p-4">
                        <img src="../assets/img/user.png" className="rounded" alt=""/>
                        <div className="text-end">
                            <button type="button" className="btn btn-primary">UPDATE</button>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-top">
                        <h1>Contact & Basic Info</h1>
                    </div>
                    <div className="box-bottom p-4">
                        <table className="tbl">
                            <tr>
                                <th rowSpan="2"><img src="../../public/img/user-name.png" alt=""/></th>
                                <td><h3>Sandun Dilhan</h3></td>
                            </tr>
                            <tr>
                                <td><h5>First name</h5></td>
                            </tr>
                            <tr>
                                <th rowSpan="2"><img src="../../public/img/user-name.png" alt=""/></th>
                                <td><h3>De Silva</h3></td>
                            </tr>
                            <tr>
                                <td><h5>Last name</h5></td>
                            </tr>
                            <tr>
                                <th rowSpan="2"><img src="../../public/img/email.png" alt=""/></th>
                                <td><h3>sandundilhan123@gmail.com</h3></td>
                            </tr>
                            <tr>
                                <td><h5>Email</h5></td>
                            </tr>
                            <tr>
                                <th rowSpan="2"><img src="../../public/img/mobile.png" alt=""/></th>
                                <td><h3>077 4954012</h3></td>
                            </tr>
                            <tr>
                                <td><h5>Mobile no.</h5></td>
                            </tr>
                        </table>
                        <div className="text-end">
                            <button type="button" className="btn btn-primary">UPDATE</button>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-top">
                        <h1>Create New Password</h1>
                    </div>
                    <div className="box-bottom p-4">
                        <form action="">
                            <div className="row g-3 m-3  align-items-center">
                                <div className="col-4">
                                    <label htmlFor="txtOldPassword" className="col-form-label">Old Password :</label>
                                </div>
                                <div className="col-8">
                                    <input type="password" id="txtOldPassword" className="form-control"
                                           aria-describedby="passwordHelpInline"/>
                                </div>
                            </div>
                            <div className="row g-3 m-3  align-items-center">
                                <div className="col-4">
                                    <label htmlFor="txtNewPassword" className="col-form-label">New Password :</label>
                                </div>
                                <div className="col-8">
                                    <input type="password" id="txtNewPassword" className="form-control"
                                           aria-describedby="passwordHelpInline"/>
                                </div>
                            </div>
                            <div className="row g-3 m-3  align-items-center">
                                <div className="col-4">
                                    <label htmlFor="txtConfirmPassword" className="col-form-label">Confirm Password :</label>
                                </div>
                                <div className="col-8">
                                    <input type="password" id="txtConfirmPassword" className="form-control"
                                           aria-describedby="passwordHelpInline"/>
                                </div>
                            </div>
                        </form>
                        <div className="text-end">
                            <button type="button" className="btn btn-primary">UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default UserDashboard;
