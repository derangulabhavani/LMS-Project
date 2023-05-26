import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default class AddEmployees extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:'',
            mobileNo:'',
            emailId:'',
            dateJoined:'',
            
            designation:'',
            managerName:'',

            salary:'',
            userName:'',
            password:'',
            errors:{}
        }
    }
    changeNameHandler=(event)=>
    {
        this.setState({name:event.target.value})
    }
    changeMobileNoHandler=(event)=>
    {
        this.setState({mobileNo:event.target.value})
    }
    changeEmailIdHandler=(event)=>
    {
        this.setState({emailId:event.target.value})
    }
    changeDateJoinedHandler=(event)=>
    {
        this.setState({dateJoined:event.target.value})
    }
    changeDesignationHandler=(event)=>
    {
        this.setState({designation:event.target.value})
    }
    changeManagerNameHandler=(event)=>
    {
        this.setState({managerName:event.target.value})
    }
    changeSalaryHandler=(event)=>{
        this.setState({salary:event.target.value});
    }
    changeUserNameHandler=(event)=>
    {
        this.setState({userName:event.target.value})
    }
    changePasswordHandler=(event)=>
    {
        this.setState({password:event.target.value})
    }
    formValidation =()=>{
        console.log("Inside validation 1")
        const {name,mobileNo,emailId,dateJoined,managerName,password}=this.state;
        let isValid =true;
        const errors ={};
        if(name.length ===0 ){
            errors.nameLen ="Please enter your name**";
            isValid=false;
           
        }
        if(mobileNo.length ===0 ){
            errors.noLen ="Mobile number is required**";
            isValid=false;   
        }
        if(emailId.length ===0 ){
            errors.emailLen ="Email ID is required**";
            isValid=false;   
        }
        if(dateJoined.length ===0 ){
            errors.dateLen ="Please enter Joined date**";
            isValid=false;   
        }
        if(managerName.length ==0 ){
            errors.managerLen ="Manager name is required**";
            isValid=false;   
        }
        if(password.length ==0 ){
            errors.passwordLen ="Please enter password**";
            isValid=false;   
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
            this.saveEmployee();
            useNavigate('/');
        }
    }
    saveEmployee=async (e)=>
    {
        // e.preventDefault();
        console.log('Save Employee method called')
        console.log(this.state.name,this.state.mobileNo,this.state.emailId,this.state.dateJoined,this.state.designation,this.state.managerName,this.state.salary,this.state.userName,this.state.password)
        const result= await axios.post("http://localhost:34798/api/Employee/Register",
        {
            "EmployeeId":0,
            "Name":this.state.name,
            "MobileNo":this.state.mobileNo,
            "EmailId":this.state.emailId,
            "DateJoined":this.state.dateJoined,
            "Designation":this.state.designation,
            "ManagerName":this.state.managerName,
            "Salary":this.state.salary,
            "UserName":this.state.userName,
            "Password":this.state.password
        });
        console.log(result)
    }
    render(){
        return(
            <div className="Auth-leave" style={{'backgroundColor':'#bbe9db'}}>
                <div className="Auth-form">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" name="name"
                            onChange={this.changeNameHandler}
                            value={this.state.name}/>
                        </div>
                        <div className="form-group">
                            <label>Mobile No</label>
                            <input className="form-control" name="mobileNo"
                            onChange={this.changeMobileNoHandler}
                            value={this.state.mobileNo}/>
                        </div>
                        <div className="form-group">
                            <label>Email Id</label>
                            <input className="form-control" name="emailId"
                            onChange={this.changeEmailIdHandler}
                            value={this.state.emailId}/>
                        </div>
                        <div>
                             <label>Date of Joined</label>
                                <input type='date' className='form-control' name='dateJoined'
                                onChange={this.changeDateJoinedHandler}
                                value={this.state.dateJoined}/>
                        </div>
                        <div className="form-group">
                            <label>Designation</label>
                            <input className="form-control" name="designation"
                            onChange={this.changeDesignationHandler}
                            value={this.state.designation}/>
                        </div>
                        <div className="form-group">
                            <label>Manager Name</label>
                            <input className="form-control" name="managerName"
                            onChange={this.changeManagerNameHandler}
                            value={this.state.managerName}/>
                        </div>
                        <div className="form-group">
                            <label>Salary</label>
                            <input className="form-control" name="salary"
                            onChange={this.changeSalaryHandler}
                            value={this.state.salary}/>
                        </div>
                        <div className="form-group">
                            <label>UserName</label>
                            <input className="form-control" name="userName"
                            onChange={this.changeUserNameHandler}
                            value={this.state.userName}/>
                        </div>
                        <div className="form-group">
                            <label>Enter Password</label>
                            <input className="form-control" name="password" type="Password"
                            onChange={this.changePasswordHandler}
                            value={this.state.password}/>
                        </div>
                        <button className="btn btn-success" onClick={this.onFormSubmit}>Register</button>
                        {
                            Object.keys(this.state.errors).map((item)=>{
                                return <div key={item} style={{color:"red"}}>{this.state.errors[item]}</div>
                            })}
                    </form>
                </div>
            </div>
        )
    }
}