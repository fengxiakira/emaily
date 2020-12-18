// surveyForm is for user to input data
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom"
import SurveyField from "./SurveyField";
import validateEmail from "../../util/vaildateEmail"
import formFields from '../constant/formFields'


// call back of form, no need values
// when submit, pass onSurveySubmit to handlSubmit
// set the review state to true
class SurveyForm extends Component {
  renderField() {
    return formFields.map(({ label, name}) => {
        return <Field key = { name } label={ label } type = "text" name = { name } component = {SurveyField} />
    })
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderField()}
          <Link to = "/surveys" className="red btn-flat left white-text">
            Cancel
            <i className = "material-icons right">clear</i>
          </Link>
          <button type="submit" className = "teal btn-flat right white-text">
              Next
              <i className = "material-icons right">done</i>
          </button>
          
        </form>
      </div>
    );
  }
}

// errors 
function validate(values){
    
    const errors = {}

    // vaildate email first 
    errors.emails = validateEmail(values.emails|| " ")

    // validate each not empty item in the formFields
    formFields.forEach(({ name, noValueError })=>{
        if(!values[name]){
            errors[name] = noValueError
        }
    })
    
    return errors
}


export default reduxForm({
  validate,  
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
