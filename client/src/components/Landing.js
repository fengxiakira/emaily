// Landing component , adjust later
import React from "react";
import { footerStyle } from "./constant/styleConstant";
import pic from "../macaroni-sign-up.png";

// first{}:show some JS
// second{}: some JS object
const Landing = () => {
  return (
    <div>
      <div style={{ marginLeft: 30, clear: "right", boxSizing: "content-box" }}>
        <img
          src={pic}
          style={{
            flex: 1,
            resizeMode: "cover",
            width: "40%",
            height: "40%",
            float: "right",
            marginRight: 40,
          }}
        />
        <h2> Collect feedbacks from users. </h2>
      </div>

      <footer style={footerStyle}>
        Illustration by
        <a href="https://dribbble.com/muratkalkavan">
          Murat Kalkavan
        </a> from <a href="https://icons8.com/">Icons8</a>
      </footer>
    </div>
  );
};

export default Landing;
