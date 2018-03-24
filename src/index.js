import React from "react";
import ReactDOM from "react-dom";
import style from "./index.css";

import GoogleSignIn from "./GoogleSignIn/GoogleSignIn";

const Index = () => {
  return (
    <div className={style.wrapper}>
      <h1>Magic Vote</h1>
      <GoogleSignIn />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
