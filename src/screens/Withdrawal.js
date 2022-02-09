import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Footer from "../components/Footer/Footer";

function Withdrawal() {
    return(
        <div className="container text-body">
            <div className="row text-center">
                <div className="col-sm">
                    <h1 className="display-1 text-uppercase">WITHDRAWAL</h1>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-sm">
                    <div className="container bg-secondary bg-opacity-25 p-5 text-body">
                        <div className="row text-center">
                            <div className="col-sm">
                                <h2 className="text-uppercase">Pending Amount</h2>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-sm">
                                <h2 className="text-uppercase">$0000.00</h2>
                            </div>
                        </div> <br/><br/>
                        <div className="row fo-r-m">
                            <form action="">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="txtFound" placeholder="Type Found"/>
                                    <label htmlFor="txtFound">Found</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="txtAmount" placeholder="Type Amount"/>
                                    <label htmlFor="txtAmount">Amount</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="txtPassword" placeholder="Type Password"/>
                                    <label htmlFor="txtPassword">Password</label>
                                </div>
                                <button className="btn btn-primary text-uppercase px-4 btn-lg" type="submit">Withdraw</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Withdrawal;
