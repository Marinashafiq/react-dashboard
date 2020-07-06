import React from "react";
import Button from "@material-ui/core/Button";
import "./Button.scss";

export const ButtonComponent = ({
  variant,
  classes,
  content,
  color,
  handleClick,
  type,
  disabled,
  textColor,
}) => {
  return (
    <Button
      disabled={disabled}
      type={type}
      variant={variant}
      className={`medium_font ${variant === "contained" && "text-white"} ${
        classes + " " + textColor
      }`}
      color={color}
      onClick={handleClick}
    >
      {content}
    </Button>
  );
};
