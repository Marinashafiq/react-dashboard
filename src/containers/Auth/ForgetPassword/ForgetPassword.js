import React from "react";
import { injectIntl } from "react-intl";
import Validation from "vanila-js-validation";
import { AuthWrapper } from "../../../components/AuthWrapper/AuthWrapper";
import InputField from "../../../components/Controls/Input/Input";
import { forgetPasswordRequest } from "../../../store/auth/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ForgetPassword = ({ intl: { messages } }) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    !Validation.isRequired(email) &&
      dispatch(
        forgetPasswordRequest({
          email,
        })
      );
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const renderFormContent = () => {
    return (
      <InputField
        name="email"
        id="email"
        label={messages.formControl.email}
        value={email}
        changeHandler={handleChange}
        isRequired={true}
      />
    );
  };

  return (
    <AuthWrapper
      header={messages.auth.forgetPassword}
      content={renderFormContent()}
      handleSubmit={handleSubmit}
    />
  );
};

export default injectIntl(ForgetPassword);
