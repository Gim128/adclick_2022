import React from 'react';
import '../assets/css/paymentHistory.css';
import Box from '@mui/material/Box';

export  default function PaymentHistory() {
    return(
        <div>
            <div className="bg-red">

                <div className="row px-5">
                    <h1>Payments</h1>
                </div><br/><br/>

                <div className="row p-5">
                    <div className="col">
                        <p>Total Payments</p>
                        <h2>$80450.65</h2>
                    </div>
                    <div className="col">
                        <p>Last Month</p>
                        <h2>$8045.65</h2>
                    </div>
                    <div className="col">
                        <p>Last 60 Days</p>
                        <h2>$845.65</h2>
                    </div>
                </div>
            </div>

            <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Payments</th>
                    <th scope="col">Payments</th>
                    <th scope="col">Payments</th>
                    <th scope="col">Payments</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Payment</td>
                    <td>Paypal</td>
                    <td>Lorem</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Payment</td>
                    <td>Paypal</td>
                    <td>Lorem</td>
                    <td>$50.00</td>

                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Payment</td>
                    <td>Paypal</td>
                    <td>Lorem</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Payment</td>
                    <td>Paypal</td>
                    <td>Lorem</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Payment</td>
                    <td>Paypal</td>
                    <td>Lorem</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>Payment</td>
                    <td>Paypal</td>
                    <td>Lorem</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    <th scope="row">7</th>
                    <td>Payment</td>
                    <td>Paypal</td>
                    <td>Lorem</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    <th scope="row">8</th>
                    <td>Payment</td>
                    <td>Paypal</td>
                    <td>Lorem</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    <th scope="row">9</th>
                    <td>Payment</td>
                    <td>Paypal</td>
                    <td>Lorem</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    <th scope="row">10</th>
                    <td>Payment</td>
                    <td>Paypal</td>
                    <td>Lorem</td>
                    <td>$50.00</td>
                </tr>
                </tbody>
            </table>
            </div>

        </div>

    )
}

// export default PaymentHistory;
