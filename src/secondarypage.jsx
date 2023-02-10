import React from "react";
import { Component } from "react";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

class Secondary extends Component{
  constructor(props){
    super(props)
    this.state={
      items:"",
      isLoaded:false
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
      .then(json=>this.setState({items:json,isLoaded:true}))
  }
  render(){
   const items= this.state.items
   const isLoaded= this.state.isLoaded
   return (
    <>
    {isLoaded?
    <>
    <Button  align="center"  variant="outlined" onClick={this.props.handleLogOut}> LogOut</Button> 
      <TableContainer>
      <Table sx={{ maxWidth: 1000 }} aria-label="simple table" align="center">
        <TableHead>
          <TableRow>
            <TableCell>UserID</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Body</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
          {items.map((item) => (
            <TableRow  key={item.id}>
              <TableCell component="th" scope="row">{item.userId}</TableCell>
              <TableCell align="center">{item.id}</TableCell>
              <TableCell align="center">{item.title}</TableCell>
              <TableCell align="center">{item.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
     : 
     <p style={{textAlign:"center"}}>Please wait Table is being loaded</p>}
    </>
   )
  }
}
export default Secondary