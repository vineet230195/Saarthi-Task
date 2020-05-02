import React from "react";
import Modal from './modal';
import EmployeeList from './EmployeeTable'
import '../style.css';

class EmployeeButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: false,
            name:'',
            employeeId:'',
            department:'',
            departmentOption:[
                {id:1,name:'Front-End Developer'},
                {id:2,name:'Node.js Developer'},
                {id:3,name:'MEAN Stack Developer'},
                {id:4,name:'FULL Stack Developer'},
                {id:5,name:'Back-end Developer'}
            ],
            email:'',
            doj:'',
            employeeTable: false,
            employeeList: [],
            error: false
        };
    }
    handleClear=()=>{
        this.setState({
            name:'',
            employeeId:'',
            department:'',
            email:'',
            doj:'',
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
         })   
     }

    handleSubmit =  (e) => {
    const {email,employeeId,department,doj,employeeList,name} = this.state;
         e.preventDefault()
        if(name !== '' && employeeId !== '' && department !== '' && doj !== '' && email !== '') {
         const formData={
                name,
                employeeId,
                department,
                email,
                doj
        }
             this.setState({
                    show: false,
                    employeeTable : true,
                    employeeList: employeeList.concat(formData)
                })
                 this.handleClear()
            } else {
                     this.setState({
                     error: true
                 })
            }
         }

    handleRemove=(id)=>{
        this.setState(prevState => ({
            employeeList: prevState.employeeList.filter(user => user.employeeId !== id) 
        }))
    }

        showModal = () => {
          this.setState({ show: true });
        };
      
        hideModal = () => {
          this.setState({ show: false });
        };

        render() {
         return (
            <div className="conatinerStyle">
                <Modal show={this.state.show} handleClose={this.hideModal}>
            <div>
                <div className="tableStyle">
                    <h1>Add Employee Details</h1>
                </div>

                <form onSubmit={(e) => {e.preventDefault()}}>
                  <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' value={this.state.name} onChange={this.handleChange}/>
                    {!this.state.name && this.state.error && <span className="errorText">Invalid input</span>}
                 </div>

                 <div>
                    <label htmlFor='empId'>Employee ID</label>
                    <input type='text' id='empId' name='employeeId' value={this.state.employeeId} onChange={this.handleChange}/>
                    {!this.state.employeeId && this.state.error && <span className="errorText">Invalid input</span>}
                </div>

                <div>
                    <label htmlFor='department'>Department</label>
                    <select value={this.state.department} name='department' onChange={this.handleChange}>
                                <option>select</option>
                                {this.state.departmentOption.map(job=>{
                                return <option key={job.id} value={job.name}>{job.name}</option>
                                })}
                        </select>
                        {!this.state.department && this.state.error && <span className="errorText">Invalid input</span>}
                </div>
                <div>
                    <label htmlFor='email'>Email ID</label>
                    <input type='text' id='email' name='email' value={this.state.email} onChange={this.handleChange}/>
                    {!this.state.email && this.state.error && <span className="errorText">Invalid input</span>}
                </div>
                <div>
                    <label htmlFor='doj'>doj</label>
                    <input type='date' id='doj' name='doj' value={this.state.doj} onChange={this.handleChange}/>
                    {!this.state.doj && this.state.error && <span className="errorText">Invalid input</span>}
                </div>
                    <button onClick={this.handleClear}>Clear</button>
                    <button onClick={this.handleSubmit}>Submit Details</button>
                </form>
            </div>
              </Modal>
              <div className="center">
                <div>
                 <button type="button" onClick={this.showModal}>New Employee</button>
                </div>
              </div>
              <div>
                {this.state.employeeTable && this.state.employeeList.length!==0 ?<EmployeeList handleRemove={this.handleRemove} employee={this.state.employeeList}/>:''}
               </div>
              </div>
            )
        }
    }

export default EmployeeButton