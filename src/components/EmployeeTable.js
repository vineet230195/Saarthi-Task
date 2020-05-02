import React from 'react'
import '../style.css';

function EmployeeList(props){

    return(
        <div>
            <div className="tableStyle">
            <h1>New Hiring Details</h1>
            </div>
            <div className="tableStyle">
            <table className='fixed_header'>
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Employee Id</th>
                        <th>Department</th>
                        <th>Email Id</th>
                        <th>DOJ</th>
                        <th></th>
                        
                    </tr>
                </thead>
                <tbody>
                { props.employee.map((list,i)=>{
                                return(
                                    <tr  key={i}>
                                    <td >{list.name}</td>
                                    <td >{list.employeeId}</td>
                                    <td >{list.department}</td>
                                    <td >{list.email}</td>
                                    <td >{list.doj}</td>
                                    <td><button className='crossbutton'onClick={()=>props.handleRemove(list.employeeId)}>X</button></td>
                                    </tr>
                                )
                            })
}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default EmployeeList