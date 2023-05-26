import axios from "axios";
import React from "react";

class Approveordenyleave extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            employees:{},
            leaves:{},
            comments:'',
            //status:''
        }
    }

    componentDidMount()
    {
        axios.get('http://localhost:34798/api/Employee/EmployeebyLeaveId?lid='+localStorage.getItem('leaveid')).then((res)=>{
            this.setState({employees:res.data});
        })
        axios.get('http://localhost:34798/api/LeaveApplications/Leavedetailsbyid?id='+localStorage.getItem('leaveid')).then((res)=>{
            this.setState({leaves:res.data});
        })
        
    }

    changeCommentHandler=(event)=>
    {
        this.setState({comments: event.target.value})
    }

    approvehandler()
    {
        console.log('approvehandler called');
        // this.setState({status:'Approved'});
        // console.log(this.state.status);
        localStorage.setItem('status','Approved');
        this.updateaction();
    }
    denyhandler()
    {
        console.log('denyhandler called');
        // this.setState({status:'Denied'})
        // console.log(this.state.status);
        localStorage.setItem('status','Denied');
        this.updateaction();
    }
    cancel()
    {
        window.location='/dashboard';
    }
    
    updateaction=()=>
    {
        axios.patch('http://localhost:34798/api/LeaveApplications/Actionbymanager?lid='+localStorage.getItem('leaveid')+'&status='+localStorage.getItem('status')+'&comment='+this.state.comments).
        then((res)=>{
            if(res.data==='Success')
            {
                window.location='/pendingleaveapplications';
            }
            else
            {
                alert('Error occured');
            }
        })
    }
    render()
    {
        return(
            <div>
                <h2 className="text-center">Approve Deny Leave</h2><br/><br/>
                <p>Leave Id:{localStorage.getItem('leaveid')}</p>
                <div className="row">
                    <table className="table table-striped table-bodered">
                            <tr>
                                <th>Id</th><td>{this.state.employees.employeeId}</td>
                            </tr>
                            <tr>
                                <th>Name</th><td>{this.state.employees.name}</td>
                            </tr>
                            <tr>
                                <th>Designation</th><td>{this.state.employees.designation}</td>
                            </tr>                                      
                            <tr>
                                <th>Start Date</th><td>{this.state.leaves.startDate}</td>
                            </tr>
                            <tr>
                                <th>End Date</th><td>{this.state.leaves.endDate}</td>
                            </tr>
                            <tr>
                                <th>Number Of Days</th> <td>{this.state.leaves.numberOfDays}</td>
                            </tr>
                            <tr>
                                <th>Leave Type</th><td>{this.state.leaves.leaveType}</td>
                            </tr>
                            <tr>
                                <th>Reason</th><td>{this.state.leaves.leaveReason}</td>
                            </tr>
                    </table>
                    
                </div>
                <div className="form-group">
                            <label>Comments:</label>
                            <textarea className="form-control" name="comments" 
                            onChange={this.changeCommentHandler}
                            value={this.state.comments}/>
                        </div><br/>
                <button className="btn btn-primary" onClick={()=>this.approvehandler()}>Approve</button>
                <button className="btn btn-primary" onClick={()=>this.denyhandler()}>Deny</button>
                <button className="btn btn-primary" onClick={()=>this.cancel()}>Cancel</button>
            </div>
        )
    }

}

export default Approveordenyleave;