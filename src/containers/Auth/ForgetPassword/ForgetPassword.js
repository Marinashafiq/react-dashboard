import React from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import Validation from "vanila-js-validation";
import { AuthWrapper } from "../../../components/AuthWrapper/AuthWrapper";
import InputField from "../../../components/Controls/Input/Input";
import { forgetPasswordRequest } from "../../../redux/actions/auth";

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forget_password_form: {
        email: "",
      },
    };
  }

  handleLogin = () => {
    const {
      forget_password_form,
      forget_password_form: { email },
    } = this.state;
    const { forgetPasswordRequest } = this.props;
    !Validation.isRequired(email) && forgetPasswordRequest(forget_password_form);
  };

  handleChange = (e) => {
    this.setState({
      forget_password_form: {
        [e.target.name]: e.target.value,
      },
    });
  };

  renderFormContent = () => {
    const {
      intl: { messages },
    } = this.props;
    const {
      forget_password_form: { email },
    } = this.state;
    return (
      <InputField
        name="email"
        id="email"
        label={messages.formControl.email}
        value={email}
        changeHandler={this.handleChange}
        isRequired={true}
      />
    );
  };

  render() {
    const {
      intl: { messages },
    } = this.props;
    return (
      <AuthWrapper
        header={messages.auth.forgetPassword}
        content={this.renderFormContent()}
        handleSubmit={this.handleLogin}
      />
    );
  }
}

const ForgetPasswordComponent = injectIntl(ForgetPassword);

export default connect(null, { forgetPasswordRequest })(ForgetPasswordComponent);
