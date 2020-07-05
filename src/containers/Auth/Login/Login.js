import React from "react";
import History from "../../../routes/history";
import { injectIntl } from "react-intl";
import { AuthWrapper } from "../../../components/AuthWrapper/AuthWrapper";
import { InputField } from "../../../components/Controls/Input/Input";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login_form: {
        email: "",
        password: "",
      },
    };
  }

  handleLogin = () => {
    localStorage.setItem("token", "token");
    History.push("/");
  };

  handleChange = () => {};

  renderLoginContent = () => {
    const {
      intl: { messages },
    } = this.props;
    const {
      login_form: { email, password },
    } = this.state;
    return (
      <>
        <InputField
          name="email"
          id="email"
          label={messages.formControl.email}
          value={email}
          changeHandler={this.handleChange}
          isRequired={true}
        />
        <InputField
          name="password"
          id="password"
          label={messages.formControl.password}
          value={password}
          changeHandler={this.handleChange}
          isRequired={true}
        />
      </>
    );
  };

  render() {
    const {
      intl: { messages },
    } = this.props;
    return (
      <AuthWrapper
        header={messages.auth.login}
        content={this.renderLoginContent()}
        handleSubmit={this.handleLogin}
      />
    );
  }
}

export default injectIntl(Login);
