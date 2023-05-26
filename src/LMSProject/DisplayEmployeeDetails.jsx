import React from "react";
import EmployeeService from "../Services/EmployeeService";



class ListEmployee extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            employees:[]
        };
    }
     //for login
     Login (eid){
        localStorage.setItem('loginId',eid);
        window.location ='/login';
    }
    componentDidMount()
    {
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employees:res.data});
            
        })
        console.log(this.state.employees);
        
    }
    
    render()
    {
        return(
            <div>
                <h2 className="text-center">Employees List</h2>
                <br></br>
                <br></br>
                
                <div className="row table-margin" style={{'backgroundColor':'linen','margin':'30px 30px'}}>
                    <table className="table table-striped table-bodered">
                        <thead style={{'backgroundColor':'darkgray'}}>
                            <tr>
                                <th>EmployeeId</th>
                                <th>Name</th>
                                <th>MobileNo</th>
                                <th>EmailId</th>
                                <th>DateJoined</th>
                                <th>Designation</th>
                                <th>ManagerName</th>
                                {/* <th>Salary</th> */}
                                <th>UserName</th>
                                {/* <th>Password</th> */}
                                <th>Login</th>

                           </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(                                    
                                    emp =>                                   
                                    <tr key={emp.employeeId}>
                                        <td>{emp.employeeId}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.mobileNo}</td>
                                        <td>{emp.emailId}</td>
                                        <td>{emp.dateJoined}</td>
                                        <td>{emp.designation}</td>
                                        <td>{emp.managerName}</td>
                                        {/* <td>{emp.salary}</td> */}
                                        <td>{emp.userName}</td>
                                        {/* <td>{emp.password}</td> */}
                                        <td>
                                        <button style={{'backgroundColor':'darkgray'}} className="btn btn-primary" onClick={()=>this.Login(emp.employeeId)} >Login</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListEmployee;