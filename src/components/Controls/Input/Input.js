import React from "react";
import { TextField } from "@material-ui/core";
import { injectIntl } from "react-intl";
 const InputField = ({
  name,
  id,
  className,
  label,
  value,
  error,
  changeHandler,
  helperText,
  isMultiline,
  isRequired,
  max,
  disabled,
  type,
}) => {
  return (
    <TextField
      disabled={disabled}
      className={`my-3 ${className ? className : ""}`}
      name={name}
      id={id}
      type={type ? type : "text"}
      label={isRequired ? label + "*" : label}
      inputProps={{ maxLength: max ? max : isMultiline ? 500 : 50 }}
      variant="outlined"
      fullWidth
      value={value}
      error={error}
      helperText={helperText}
      onChange={changeHandler}
      multiline={isMultiline}
      rows={isMultiline ? 3 : 1}
    />
  );
};

export default injectIntl(InputField);