// Route Dashboard component
import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <Link
        to="/surveys/new"
        className="fixed-action-btn btn-floating btn-large red"
      >
        <i className="large material-icons">add</i>
      </Link>
    </div>
  );
};

export default Dashboard;
