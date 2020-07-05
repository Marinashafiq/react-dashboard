import React from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Validation from "vanila-js-validation";
import { AuthWrapper } from "../../../components/AuthWrapper/AuthWrapper";
import { InputField } from "../../../components/Controls/Input/Input";
import { loginRequest } from "../../../redux/actions/auth";
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
    const {
      login_form,
      login_form: { email, password },
    } = this.state;
    const { loginRequest } = this.props;
    !Validation.isRequired(email) &&
      !Validation.isRequired(password) &&
      loginRequest(login_form);
  };

  handleChange = (e) => {
    const { login_form } = this.state;
    this.setState({
      login_form: {
        ...login_form,
        [e.target.name]: e.target.value,
      },
    });
  };

  renderFormContent = () => {
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
        <div className="d-flex justify-content-end">
          <Link to="/forgetPassword" className="text-secondary mb-3">
            {messages.auth.forgetPassword}
          </Link>
        </div>
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
        content={this.renderFormContent()}
        handleSubmit={this.handleLogin}
      />
    );
  }
}

const LoginComponent = injectIntl(Login);

export default connect(null, { loginRequest })(LoginComponent);
