import axios from 'axios';
import React from 'react';

export default class ListOfLeaves extends React.Component

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
        axios.post('http://localhost:34798/api/LeaveApplications/Leavedetailsbyemployee?eid='+localStorage.getItem('user')).then((res) =>{

            this.setState({leaves:res.data});

        })

    }
    newApplication()
    {
        window.location='/applyleave';
    }


    render()

    {

        return(

        <div>

            <h2 className='text-center'>Apply Leaves List</h2>

            <br /><br />

            <div className='row card-body'>

                <table className='table table-striped table-bordered'>

                    <thead>

                        <tr>

                        <th>Leave Id</th>
                            <th>Number Of Days</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Leave Type</th>
                            <th>Status</th>
                            <th>Leave Reason</th>
                            <th>Applied On</th>
                            <th>Manager Comments</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            this.state.leaves.map(

                                leave =>

                                <tr key={leave.leaveApplicationId}>
                                    <td>{leave.leaveApplicationId}</td>
                                    <td>{leave.numberOfDays}</td>
                                    <td>{leave.startDate}</td>
                                    <td>{leave.endDate}</td>
                                    <td>{leave.leaveType}</td>
                                    <td>{leave.status}</td>
                                    <td>{leave.leaveReason}</td>
                                    <td>{leave.appliedOn}</td>
                                    <td>{leave.managerComments}</td>
                                </tr>


                            )

                        }

                    </tbody>

                </table>
                <button className='btn btn-primary' onClick={()=>this.newApplication()}>New Application</button>

            </div>

        </div>

    )}

}