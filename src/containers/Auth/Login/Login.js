import React from "react";
import { injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import Validation from "vanila-js-validation";
import { AuthWrapper } from "../../../components/AuthWrapper/AuthWrapper";
import InputField from "../../../components/Controls/Input/Input";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginRequest } from "../../../store/Auth/actions";

const Login = ({ intl: { messages } }) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleLogin = () => {
    const { email, password } = loginForm;
    !Validation.isRequired(email) &&
      !Validation.isRequired(password) &&
      dispatch(loginRequest(loginForm));
  };

  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const renderFormContent = () => {
    const { email, password } = loginForm;
    return (
      <>
        <InputField
          name="email"
          id="email"
          label={messages.formControl.email}
          value={email}
          changeHandler={handleChange}
          isRequired={true}
          type="email"
        />
        <InputField
          name="password"
          id="password"
          label={messages.formControl.password}
          value={password}
          changeHandler={handleChange}
          isRequired={true}
          type="password"
        />
        <div className="d-flex justify-content-end">
          <Link to="/forgetPassword" className="text-secondary mb-3">
            {messages.auth.forgetPassword}
          </Link>
        </div>
      </>
    );
  };

  return (
    <AuthWrapper
      header={messages.auth.login}
      content={renderFormContent()}
      handleSubmit={handleLogin}
    />
  );
};

export default injectIntl(Login);
