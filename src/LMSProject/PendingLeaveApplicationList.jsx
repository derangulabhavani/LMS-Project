import axios from 'axios';
import React from 'react';

export default class PendingLeaveApplicationList extends React.Component

{

    constructor(props)

    {

        super(props);

        this.state=

        {

            leaves:[]

        }

    }

    componentDidMount()

    {
        axios.post('http://localhost:34798/api/LeaveApplications/GetPendingLeaveapplications?eid='+localStorage.getItem('user')).then((res) =>{

            this.setState({leaves:res.data});

        })
    }
    ApproveOrDeny(leaveid)
    {
        localStorage.setItem('leaveid',leaveid);
        window.location='/ApproveOrDeny';
    }
    render()

    {

        return(

        <div>

            <h2 className='text-center'>My Reporting Employees Pending Leave Applications</h2>

            <br /><br />

            <div className='row card-body'>

                <table className='table table-striped table-bordered'>

                    <thead>

                        <tr>
                            <th>Employee Id</th>
                            <th>Leave Id</th>
                            <th>Number Of Days</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Leave Type</th>
                            <th>Status</th>
                            <th>Leave Reason</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {

                            this.state.leaves.map(

                                leave =>

                                <tr key={leave.leaveApplicationId}>
                                    <td>{leave.employeeId}</td>
                                    <td>{leave.leaveApplicationId}</td>
                                    <td>{leave.numberOfDays}</td>
                                    <td>{leave.startDate}</td>
                                    <td>{leave.endDate}</td>
                                    <td>{leave.leaveType}</td>
                                    <td>{leave.status}</td>
                                    <td>{leave.leaveReason}</td>
                                    <td><button className='btn btn-primary' onClick={()=>this.ApproveOrDeny(leave.leaveApplicationId)} >Approve/Deny</button></td>
                                </tr>

                            )

                        }

                    </tbody>

                </table>

            </div>

        </div>

    )}

}