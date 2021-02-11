import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as dataActions from "../action/data";
import "./Login.css";

function LoginPage(props) {
  const [loginUserName, setloginUserName] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  const userName = props.data.username;
  const password = props.data.password;

  const userNameData = (e) => {
    setloginUserName(e.target.value);
  };
  const passwordData = (e) => {
    setloginPassword(e.target.value);
  };
  const handleLogin = () => {
    if (userName === loginUserName && password === loginPassword) {
      props.history.push("/employeelist");
    } else {
      if (
        (loginUserName !== "" && loginUserName !== userName) ||
        (loginPassword !== "" && loginPassword !== password) ||
        (loginUserName === "" && loginPassword === "")
      ) {
        alert("Enter valid Login Details ");
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="UserName"
        onChange={userNameData}
        class="textbox"
      ></input>
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={passwordData}
        class="textbox"
      ></input>
      <br />
      <button onClick={handleLogin} class="button">
        Login
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.login,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(dataActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
