import React from 'react';
import '../Appform/application1.css';

import { useForm } from "react-hook-form";

function Application() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };


  // console.log(watch());

  // console.log(errors.name)

  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">Applicant Registration Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label"></label>
              <input
                type="text" placeholder='firstname'
                className={`form-control ${errors.firstname && "invalid"}`}
                {...register("firstname", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("firstname");
                }}
              />
              {errors.firstname && (
                <small className="text-danger">{errors.firstname.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label"></label>
              <input
                type="text" placeholder='lastname'
                className={`form-control ${errors.lastname && "invalid"}`}
                {...register("lastname", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("lastname");
                }}
              />
              {errors.lastname && (
                <small className="text-danger">{errors.lastname.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label"></label>
              <input
                type="text" placeholder='enter email'
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label"></label>
              <input
                type="text" placeholder='phone number'
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", { required: "Phone is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
               })}
               onKeyUp={() => {
                trigger("phone");
              }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>   
        <div className="form-group">
        <label></label>
        
        <select  className={`form-control ${errors.course && "invalid"}`}
                {...register("course", { required: "selct a course" })}
                onKeyUp={() => {
                  trigger("course");
                }} >
        <option value="select">Select your Course</option>
        <option value="fsd">Full Stack Developer</option>
        <option value="cyber">Cyber Security</option>
        <option value="data">Data Scientist</option>
        <option value="robo">Robotics</option>
        <option value="machine">Machine Learning</option>
        </select>
        </div>
         
        <div className="form-group">
        <label> </label>
        <select  className={`form-control ${errors.batch && "invalid"}`}
                {...register("batch", { required: "select your batch" })}
                onKeyUp={() => {
                  trigger("batch");
                }} >
                                       
        <option value="select">Select your Batch</option>
        <option value="B1">Batch 1</option>
        <option value="B2">Batch 2</option>
        <option value="B3">Batch 3</option>
        <option value="B4">Batch 4</option>
        </select>     
        </div>

        <div className="form-group">
        Course Starting Date 
        <br></br> 
        <input placeholder="Course Starting" type="date"   className={`form-control ${errors.startingdate && "invalid"}`}
                {...register("startingdate", { required: "starting date" })}
                onKeyUp={() => {
                  trigger("startingdate");
                }} /> 

        </div>

        <div className="form-group">
        Course Ending Date 
        <br></br>
        <input placeholder="Course Ending" type="date"   className={`form-control ${errors.endingdate && "invalid"}`}
                {...register("endingdate", { required: "ending date" })}
                onKeyUp={() => {
                  trigger("endingdate");
                }} /> 

        </div>

        Upload Photo
        <br></br>
        <div className="form-group">              
        <input placeholder="Upload" type="file" className={`form-control ${errors.photo && "invalid"}`}
                {...register("photo", { required: "photo" })}
                onKeyUp={() => {
                  trigger("photo");
                }} />
        </div>

            <input
              type="submit"
              className="btn"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Application;