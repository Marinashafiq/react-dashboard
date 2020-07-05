import React from "react";
import { Card } from "@material-ui/core";
import { ButtonComponent } from "../Controls/Button/Button";
import LanguageBtn from "../LanguageBtn/LanguageBtn";
import "./AuthWrapper.scss";

export const AuthWrapper = ({ header, content, handleSubmit }) => {
  return (
    <div className="authWrapper d-flex justify-content-center align-items-center">
      <Card className="p-5 m-4">
        <div className="d-flex justify-content-between mb-4">
          <h1>{header}</h1>
          <LanguageBtn color={'text-dark'}/>
        </div>
        {content}
        <ButtonComponent
          content={header}
          variant="contained"
          classes="mx-auto w-100"
          handleClick={handleSubmit}
          color="secondary"
        />
      </Card>
    </div>
  );
};
