
import React, { Component } from 'react'
import './application.css';

class ApplicationComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            emailId:'',
            phonenumber:'',
            courselist:''

        }

        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
        this.changePhoneNumberHandler=this.changePhoneNumberHandler.bind(this);
        this.changeCourseListHandler=this.changeCourseListHandler.bind(this);
        this.changeSelectBatchHandler=this.changeSelectBatchHandler.bind(this);
        this.changeStartingDateHandler=this.changeStartingDateHandler.bind(this);
        this.changeEndingDateHandler=this.changeEndingDateHandler.bind(this);
        this.changeUploadHandler=this.changeUploadHandler.bind(this);
        this.saveStudent=this.saveStudent.bind(this);
    }

    changeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandler=(event)=>{
        this.setState({emailId: event.target.value});
    }

    changePhoneNumberHandler=(event)=>{
        this.setState({phonenumber: event.target.value});
    }
    
    changeCourseListHandler=(event)=>{
        this.setState({courselist: event.target.value});
    }

    changeSelectBatchHandler=(event)=>{
        this.setState({selectbatch: event.target.value});
    }

    changeStartingDateHandler=(event)=>{
        this.setState({startingdate: event.target.value});
    }

    changeEndingDateHandler=(event)=>{
        this.setState({endingdate: event.target.value});
    }

    changeUploadHandler=(event)=>{
        this.setState({upload: event.target.value});
    }

    saveStudent=(e)=>{
        e.preventDefault();
        let student={firstName: this.state.firstName,lastName: this.state.lastName,emailId: this.state.emailId, address: this.state.address};
        console.log('Student=>'+JSON.stringify(student));
    }

    cancel(){
        this.props.history.push();
    }

    render(){
        return(
            <div>

            <div className="container">
                <div className="row">
                    <br></br>
                    <h1 className="text-center">Applicant Registration Form</h1>
                    <br></br>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                
                                <div className="form-group">
                                    <label>First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                    value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>Email: </label>
                                    <input placeholder="Email" name="emailId" className="form-control"
                                    value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>PhoneNumber: </label>
                                    <input placeholder="PhoneNumber" name="phonenumber" className="form-control"
                                    value={this.state.phonenumber} onChange={this.changePhoneNumberHandler}/>
                                </div>
                                <br></br>
                                <div className="form-group">
                                <label>CourseList: </label>

                                <select value={this.state.value} onChange={this.handleChange}>
                                       
                                       <option value="fsd">Full Stack Developer</option>
                                       <option value="cyber">Cyber Security</option>
                                       <option value="data">Data Scientist</option>
                                       <option value="robo">Robotics</option>
                                       <option value="machine">Machine Learning</option>
                                       
                                       </select>
                                </div>
                                <br></br>
                                <div className="form-group">
                                   <label>
                                       Select your batch: 
                                       </label>
                                       <select value={this.state.value} onChange={this.handleChange}>
                                       
                                       <option value="2021jan">2021JANUARY</option>
                                       <option value="2021apr">2021APRIL</option>
                                       <option value="2021aug">2021AUGUST</option>
                                       <option value="2021dec">2021DECEMBER</option>
                                       
                                       </select>
                                   
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>
                                        Course Starting Date: 
                                    </label>
                                        <select value={this.state.value} onChange={this.handleChange}>

                                        </select>
                                      
       
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>
                                        Course Ending Date: 
                                    </label> 
                                    
                                        <select value={this.state.value} onChange={this.handleChange}>

                                        </select>
                                      
       
                                </div>
                                <br></br>
                                <div className="form-group">
                                   <label>
                                       Upload Photo
                                   </label>
                                   <input type="file" name="file" /> <button> Upload </button>
                                </div>
                                <br></br>
                                <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind} style={{marginLeft:"10px"}}>Cancel</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default ApplicationComponent 
