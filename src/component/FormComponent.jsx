import React, { Component } from "react";
import {ToastContainer , toast, Flip} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  withStyles,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import Step1 from "./Steps/step1";
import Step2 from "./Steps/step2";
import Step3 from "./Steps/step3";
import Step4 from "./Steps/step4";
import FinalStep from "./Steps/FinalStep";
import { renderText } from "./common/DisplayComponent";
import { styles } from "./common/styles";

class FormComponent extends Component {
  state = {
    invalidEmail:true,
    invalidPhone:true,
    data: {
      organizationname: "",
      email: "",
      location: "",
      country:"",
      address:"",
      phone: "",
      currentlocale:"",
      dateformat:"",
      timeformat:"",

      branchname: "",
      branchhead: "",
      branchaddress: "",
      reportingmanager: "",

      departmentname: "",
      departmenthead: "",

      designation:"",
    },
    errors: {},
    steps:[
      { label: "General" },
      { label: "Branch"},
      { label: "Department" },
      { label: "Designation" },
    ],
    stepCount: 0,
  };
  
  render() {
    const { classes } = this.props;

    const {
      organizationname,
      email,
      location,
      country,
      phone, 
      dateformat,
      timeformat,

      branchname,
      branchaddress,

      designation,
    } = this.state.data;

    const handleOnChange = ({ target }) => {
      const { data, errors } = this.state;

      if(target.name==="email"){
        let { invalidEmail } = this.state;
        if(!target.value.includes("@") || !target.value.includes(".")){
          errors[target.name] = "Invalid Email";
          invalidEmail=true;
          this.setState({ invalidEmail });  
        }else{
          errors[target.name] = "";
          invalidEmail=false;
          this.setState({ invalidEmail });
        }
      }
      else if(target.name==="phone"){
        let phoneno = /^\d{10}$/;
        let { invalidPhone } = this.state;

        if(!target.value.match(phoneno)){
          errors[target.name] = "Invalid Number";
          invalidPhone=true;
          this.setState({ invalidPhone });        
        }else{
          errors[target.name] = "";
          invalidPhone=false;
          this.setState({ invalidPhone }); 
         } 
      }
        data[target.name] = target.value;
        this.setState({ data, errors });
    };

    const handleNextStep = () => {

      let {stepCount} = this.state;
      if(stepCount===0){
          if(organizationname===""||email===""||location===""||
          country===""||phone===""||dateformat===""||timeformat===""){
            toast.error("All the fields with * mark must be filled")
            return;
          }
          else if(this.state.invalidEmail){
            toast.error("Invalid Email")
            return;
          }
          else if(this.state.invalidPhone){
            toast.error("Invalid Phone Number")
            return;
          } 
        }
      else if(stepCount===1){
          if(branchname===""||branchaddress===""){
            toast.error("All the fields with * mark must be filled")
            return;
          }
        }
      else if(stepCount===3){
          if(designation===""){
            toast.error("All the fields with * mark must be filled")
            return;
          }
      }
        console.log("stepCount", stepCount);
        stepCount = stepCount + 1;
        this.setState({ stepCount });

    };

    const handleBackStep = () => {
      let { stepCount } = this.state;
      stepCount = stepCount - 1;
      this.setState({ stepCount });
    };

    const stepnumber = document.getElementsByClassName("MultiStepIcon-Text");

    for(var i=0;i<stepnumber.length;i++){
        stepnumber[i].addEventListener("click", (e)=>{
          console.log(e.target)
        })
    }

    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return (
            <Step1
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
            />
          );
        case 1:
          return (
            <Step2
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
            />
          );
        case 2:
          return (
            <Step3
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
            />
          );
        case 3:
          return (
            <Step4
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
            />
          );
        case 4:
          return <FinalStep data={this.state.data} />;
        default:
          return (
            <Step1
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
            />
          );
      }
    };

    return (
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} sm={7}>
          <form className={classes.form}>
            
              <Box pt={2}>
                {renderText({
                  type: "h6",
                  color: "primary",
                  label: "Secure Service Plus",
                  align: "center",
                })}
              </Box>
    
              <Stepper activeStep={this.state.stepCount} alternativeLabel >
                {this.state.steps.map((item) => (
                  <Step key={item.label}>
                    <StepLabel>{item.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  // rtl={false}
                  pauseOnFocusLoss
                  pauseOnHover
                  transition={Flip}
                />
            {getStepContent(this.state.stepCount)}
          </form>
        </Grid>
      </Grid>
    );
  }
}

FormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormComponent);
