import React from "react";
import { ButtonComponent } from "../../../components/Controls/Button/Button";
import History from "../../../routes/history";
class Login extends React.Component {
  handleLogin = () => {
    localStorage.setItem("token", "token");
    History.push("/");
  };

  render() {
    return (
      <div className="container my-5">
        <h1>Login Page</h1>
        <ButtonComponent
          content="Login"
          variant="contained"
          handleClick={this.handleLogin}
        />
      </div>
    );
  }
}

export default Login;
