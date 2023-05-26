import React from "react";
import {Routes,Route,Link} from 'react-router-dom';

class EmployeeDashboard extends React.Component
{
    constructor()
    {
        super();
    }
    render(){
        return(
            <div>
                <h1>Employee Dashboard</h1>
                <h2>Welcome:{localStorage.getItem('name')}</h2>
                <br/><br/>
                
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> My Details section</h5>
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-info"><Link to='/mydetails'>Click</Link></button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> My Manager Details section</h5>
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-info"><Link to='/mymanagerdetails'>Click</Link></button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> My Leaves Details section</h5>
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-info"><Link to='/leaveslist'>Click</Link></button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> My Reporting Employees Pending LeaveApplications</h5>
                        <p class="card-text"></p>
                        <button type="button" class="btn btn-info"><Link to='/pendingleaveapplications'>Click</Link></button>
                    </div>
                </div>
                {/* <ul>
                <li><Link to='/applyleave'>ApplyLeave</Link></li>
                <li><Link to='/leaveslist'>LeaveList</Link></li>
                <li><Link to='/mydetails'>MyDetails</Link></li>
                <li><Link to='/mymanagerdetails'>MyManagerDetails</Link></li>
                <li><Link to='/pendingleaveapplications'>MyReportingEmployeesPendingLeaveApplications</Link></li>
                </ul> */}


                
            </div>
           
            
        )
    }
}

export default EmployeeDashboard;