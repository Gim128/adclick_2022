import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Footer from "../components/Footer/Footer";

function Withdrawal() {
    return(
        <div className="container">

           <div className="box">
                <h3>Withdrawal</h3>
           </div>

            <div className="heading-center">
                <p>PENDING AMOUNT</p>
                <h2>$0000.00</h2>
            </div>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="Fund" variant="standard" />
                <TextField id="standard-basic" label="Amount" variant="standard" />
                <TextField id="standard-basic" label="Password" type="password" variant="standard" />
            </Box>

            <button type="button" className="btn btn-primary btn-lg">WITHDRAW</button>


        </div>

    )
}

export default Withdrawal;