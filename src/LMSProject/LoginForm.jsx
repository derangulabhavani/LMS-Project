import React from "react";
import axios from "axios";
//import { Button, Grid, TextField } from '@mui/material'
class LoginEmployeeComponent extends React.Component
{
    constructor()
    {
        super();
        this.state={
            EmployeeId:localStorage.getItem('loginId'),
            Password:'',
            errors:{}
        }
    }
    changeEmployeeIdHandler=(event)=>
    {
        this.setState({EmployeeId: event.target.value})
    }
    changePasswordHandler=(event)=>
    {
        this.setState({Password: event.target.value})
    }

    formValidation =()=>{
        console.log("Inside validation 1")
        const {EmployeeId,Password}=this.state;
        let isValid =true;
        const errors ={};
        if(this.state.EmployeeId.length ==0 ){
            errors.employeeIdLength ="Please enter your Username**";
            isValid=false;
            console.log("Inside validation 2")
        }

        if(this.state.Password.trim().length ==0 ){
            errors.employeePassword ="Please enter your Password**";
            isValid=false;
            console.log("Inside validation 3")
        }
        this.setState({errors});
        console.log(isValid)
        console.log(errors)
        return isValid;   
    }

    onFormSubmit =(e) =>
    {
         e.preventDefault();
        //******************** */
        const isValid =this.formValidation();
        if(isValid == true){
            this.Login();
        }
    }
    Login=(e)=>
    {
        // e.preventDefault();
        const result=axios.post('http://localhost:34798/api/Employee/Login',
            {
                "Id":0,
                "EmployeeId":this.state.EmployeeId,
                "Password":this.state.Password
            }
        )
        .then((result) => {   
            if (result.data.status === 'Invalid')  
                alert(result.data.message);  
            else {
                alert('Login successfull'); 
                localStorage.setItem('user',this.state.EmployeeId);
                localStorage.setItem('name',result.data.message);
                window.location='/dashboard';
            }
        }) 
    }

    render(){
        const {errors} =this.state;
        return(
            <div className="Auth-form-container" style={{'backgroundColor':'#93e4c1'}}>
                <div className="Auth-form-content">
                    <h1>Login</h1>
                    <form className="Auth-form">
                        <div className="form-group">
                            <label>Employee Id:</label>
                            <input className="form-control" name="employeeid" 
                            onChange={this.changeEmployeeIdHandler}
                            value={this.state.EmployeeId}/>
                        </div>
                        <div style={{color:"red"}}>{this.state.errors.employeeIdLength}</div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input className="form-control" name="password" type="Password"
                            onChange={this.changePasswordHandler}
                            value={this.state.Password}/>
                        </div>
                        <div style={{color:"red"}}>{this.state.errors.employeePassword}</div>
                        <button className="btn btn-primary" onClick={this.onFormSubmit}>Login</button>
                        <p style={{'textAlign':'center'}}><b>Don't have an account? </b>
                            <a  href='/register' style = {{color: "red"}}>Register</a>
                        </p>
                            
                        {/* {
                            Object.keys(this.state.errors).map((item)=>{
                                return <div key={item} style={{color:"red"}}>{this.state.errors[item]}</div>
                            })} */}
                    </form>
                </div>
            </div>
            
        )
    }
}

export default LoginEmployeeComponent;