import React from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import Validation from "vanila-js-validation";
import { AuthWrapper } from "../../../components/AuthWrapper/AuthWrapper";
import InputField from "../../../components/Controls/Input/Input";
import { resetPasswordRequest } from "../../../redux/actions/auth";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reset_password_form: {
        password: "",
        confirm_password: "",
      },
      errors: {
        required_password: false,
        required_confirm_password: false,
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      reset_password_form: {
        ...this.state.reset_password_form,
        [e.target.name]: e.target.value,
      },
      errors: {
        ...this.state.errors,
        [`required_${e.target.name}`]: Validation.isRequired(e.target.value),
      },
    });
  };

  handleLogin = () => {
    const { reset_password_form } = this.state;
    const { resetPasswordRequest } = this.props;
    resetPasswordRequest(reset_password_form);
  };

  renderFormContent = () => {
    const {
      intl: { messages },
    } = this.props;
    const {
      reset_password_form: { password, confirm_password },
      errors: { required_password, required_confirm_password },
    } = this.state;
    return (
      <>
        <InputField
          name="password"
          id="password"
          label={messages.formControl.password}
          value={password}
          changeHandler={this.handleChange}
          isRequired={true}
          type="password"
          error={required_password}
          helperText={required_password ? messages.errors.required : ""}
        />
        <InputField
          name="confirm_password"
          id="confirm_password"
          label={messages.formControl.confirmPassword}
          value={confirm_password}
          changeHandler={this.handleChange}
          isRequired={true}
          type="password"
          error={required_confirm_password}
          helperText={required_confirm_password ? messages.errors.required : ""}
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
        header={messages.auth.resetPassword}
        content={this.renderFormContent()}
        handleSubmit={this.handleLogin}
      />
    );
  }
}

const ResetPasswordComponent = injectIntl(ResetPassword);

export default connect(null, { resetPasswordRequest })(ResetPasswordComponent);
