import React from 'react';
import '../assets/css/paymentHistory.css';
import Box from '@mui/material/Box';

export  default function PaymentHistory() {
    return(
        <div>
            <Box
                sx={{
                    width: 1600,
                    height: 300,
                    backgroundColor: '#c0392b',
                }
                }
            />
            <div>
                <h1>Payments</h1>
            </div>

            <div className="container">
            <div className="row">
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
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>$50.00</td>

                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>$50.00</td>
                </tr>
                </tbody>
            </table>
            </div>

        </div>

    )
}

// export default PaymentHistory;