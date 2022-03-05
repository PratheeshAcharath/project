
import React, { Component } from 'react'
import '../Appform/application.css';


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
                                   
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                    value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>
                                <br></br>
                                <div className="form-group">
                                
                                    <input placeholder="Email" name="email" className="form-control"
                                    value={this.state.email} onChange={this.changeEmailIdHandler}/>
                                    
                                </div>
                                <br></br>
                                <div className="form-group">
                                   
                                    <input placeholder="PhoneNumber" name="phonenumber" className="form-control"
                                    value={this.state.phonenumber} onChange={this.changePhoneNumberHandler}/>
                                </div>
                                <br></br>
                                <div className="form-group">
                                <label> </label>
                                
                                <select value={this.state.courselist} onChange={this.changeCourseListHandler}>
                                       
                                       <option value="select">Select Course</option>
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
                         
                                       </label>
                                       <select value={this.state.value} onChange={this.handleChange}>
                                       
                                       <option value="select">Select Batch</option>
                                       <option value="B1">Batch 1</option>
                                       <option value="B2">Batch 2</option>
                                       <option value="B3">Batch 3</option>
                                       <option value="B4">Batch 4</option>
                                       
                                       </select>
                                   
                                </div>
                                <br></br>
                                Course Starting date
                                <div className="form-group">
                                  
                                        <input placeholder="Course Starting" type="date"  name="startingdate" /> 
       
                                </div>
                                <br></br>
                                Course Ending date
                               <div className="form-group">
                                   
                                   <input type="date" name="endingdate" />

                                   
                               </div>
                                <br></br>
                                Upload Photo
                                <div className="form-group">
                        
                                   <input placeholder="Upload" type="file" name="file" />
                                </div>
                                <br></br>
                                
                               <input type="submit" className="buttton" name="submit" />  

                            </form>
                        </div>
                    </div>
                </div>

            
      

            </div>
            </div>



        )
    }
}

export default ApplicationComponent;


    
    
 
