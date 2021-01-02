import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurveys } from "../../actions";
import { Link } from "react-router-dom";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  handleDeleteSurvey(id) {
    this.props.deleteSurveys(id);
    // this.props.history.push("/surveys");
  }

  renderSurveys() {
    return this.props.surveys
      .reverse()
      .map(({ _id, title, body, dateSent, yes, no }) => {
        return (
          <div className="card" key={_id}>
            <div className="card-content">
              <span className="card-title">{title}</span>
              <p>{body}</p>
              <p className="right">
                Sent on : {new Date(dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {yes}</a>
              <a>No: {no}</a>
              <a
                className="btn orange darken-2"
                onClick={() => this.handleDeleteSurvey(_id)}
              >
                Delete
              </a>
            </div>
          </div>
        );
      });
  }

  render() {
    return <div> {this.renderSurveys()}</div>;
  }
}

// mapStateToProps(state): state.surveys
function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurveys })(
  SurveyList
);
