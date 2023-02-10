import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { Link } from "react-router-dom";

function Home(props){
    const [input,setInput]=useState({})
    const handleChange=(event)=>{
        event.preventDefault()
        setInput(prev=>{
            return ({...prev,[event.target.name]:event.target.value})
        })
    }

    return (
        <>
        <Box style={{margin:"auto",position:"relative",top:"10vh",color:"black"}}  align="center" component="form" autoComplete="off" >
        <TextField onChange={(e)=>handleChange(e)}  id="outlined-basic" label="Name" name="name" variant="outlined" value={input.name || ""} />
        <br/>
        <br/>
        <TextField onChange={handleChange}  id="outlined-basic" label="Phone No." name="phone" variant="outlined"  value={input.phone || ""} />
        <br/>
        <br/>
        <TextField onChange={handleChange}  id="outlined-basic" label="Email" name="email" variant="outlined"  value={input.email || ""} />
        <br/>
        <br/>
       <Link to="/secondary"> <Button variant="outlined" onClick={(e)=>props.handleSubmit(input,e)}> LogIn</Button> </Link>
        </Box>
        </>
    )
}
export default Home