// surveynew contains surveyForm and surveyFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyReview from "./SurveyFormReview";

// component level state initial
// consturctor(props){
//     super(props)
//     this.state = {new : true}
// }
class SurveyNew extends Component {
  state = { showFormReview: false };

  renderShowComponent() {
    if (this.state.showFormReview) {
      return (
        <SurveyReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderShowComponent()}</div>;
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
