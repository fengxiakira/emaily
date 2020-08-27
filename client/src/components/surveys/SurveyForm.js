// surveyForm is for user to input data
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom"
import SurveyField from "./SurveyField";
import _ from "lodash";

const FIELDS = [{ label : "Survey Title" , name : "title" }, 
{ label : "Subject Line", name : "subject"},
{ label : "Email Body", name : "body"},
{ label : "Recipient List", name : "emails"}]


class SurveyForm extends Component {
  renderField() {
    return _.map(FIELDS, ({ label, name}) => {
        return <Field key = { name } label={ label } type = "text" name = { name } component = {SurveyField} />
    })
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
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

function validate(values){
    // errors 
    const errors = {}
    // validate values,defend-coding
    if(!values.title){
        errors.title = 'You must provide a title'
    }

    return errors
}


export default reduxForm({
  validate,  
  form: "surveyForm",
})(SurveyForm);
