import React from "react";
import { Card, makeStyles } from "@material-ui/core";
import { ButtonComponent } from "../Controls/Button/Button";
import LanguageBtn from "../LanguageBtn/LanguageBtn";
import "./AuthWrapper.scss";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "2em",
    margin: "1em",
  },
});

export const AuthWrapper = ({ header, content, handleSubmit }) => {
  const classes = useStyles();
  return (
    <div className="authWrapper d-flex justify-content-center align-items-center">
      <Card className={classes.root}>
        <div className="d-flex justify-content-between mb-4 flex-wrap">
          <h2>{header}</h2>
          <LanguageBtn color={"text-dark"} />
        </div>
        {content}
        <ButtonComponent
          content={header}
          variant="contained"
          classes="mx-auto w-100 my-4"
          handleClick={handleSubmit}
          color="secondary"
        />
      </Card>
    </div>
  );
};
