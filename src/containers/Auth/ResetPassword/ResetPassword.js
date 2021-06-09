import React from "react";
import { injectIntl } from "react-intl";
import Validation from "vanila-js-validation";
import { AuthWrapper } from "../../../components/AuthWrapper/AuthWrapper";
import InputField from "../../../components/Controls/Input/Input";
import { resetPasswordRequest } from "../../../store/auth/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ResetPassword = ({ intl: { messages } }) => {
  const [resetPassword, setResetPassword] = useState({
    password: "",
    confirm_password: "",
  });
  const [resetPasswordErr, setResetPasswordErr] = useState({
    required_password: false,
    required_confirm_password: false,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setResetPassword({
      ...resetPassword,
      [e.target.name]: e.target.value,
    });
    setResetPasswordErr({
      ...resetPasswordErr,
      [`required_${e.target.name}`]: Validation.isRequired(e.target.value),
    });
  };

  const handleLogin = () => {
    dispatch(resetPasswordRequest(resetPassword));
  };

  const renderFormContent = () => {
    const { password, confirm_password } = resetPassword;
    const { required_password, required_confirm_password } = resetPasswordErr;
    return (
      <>
        <InputField
          name="password"
          id="password"
          label={messages.formControl.password}
          value={password}
          changeHandler={handleChange}
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
          changeHandler={handleChange}
          isRequired={true}
          type="password"
          error={required_confirm_password}
          helperText={required_confirm_password ? messages.errors.required : ""}
        />
      </>
    );
  };

  return (
    <AuthWrapper
      header={messages.auth.resetPassword}
      content={renderFormContent()}
      handleSubmit={handleLogin}
    />
  );
};

export default injectIntl(ResetPassword);
