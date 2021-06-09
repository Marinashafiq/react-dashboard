import React from "react";
import { injectIntl } from "react-intl";
const Home = ({ intl: { messages } }) => {
  return (
    <>
      <p>{messages.home.content}</p>
    </>
  );
};

export default injectIntl(Home);
