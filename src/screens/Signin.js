//import { Button, Paper, TextField, Typography, Link } from "@mui/material";
//import Button from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";



import React from "react";

const Signin =() => {
    // const headingStyle = {margin: "20px auto" }
    const btnStyle = {margin: '12px 0'}
    return(
        <Grid align= 'center'>
            
               <h2> WELCOME </h2> 

               <TextField label = 'Enter Here' placeholder="EMAIL OR MOBILE NO:" fullWidth required/>
               <TextField label = 'Enter Here' placeholder="PASSWORD" type='password' fullWidth required/>

               <h4>Forgot Password</h4>

               <Typography> 
                   <Link href="#">
                        Forgot Password
                   </Link>
               </Typography>

               <Button type="submit" color="#bdc3c7" variant="contained" style={btnStyle} fullWidth>
                    Login
               </Button>

               <Typography color={'color="#3498db"'}> 
                   <Link href="#">
                        Create Account Here
                   </Link>
               </Typography>
              
            
        </Grid>

        
    )
}

export default Signin;