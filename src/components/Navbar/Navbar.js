import React from "react";
import { injectIntl } from "react-intl";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import LanguageBtn from "../LanguageBtn/LanguageBtn";
import history from "../../routes/history";

function Navbar({ intl: { messages } }) {
  console.log(history.location.pathname);
  const pathName =
    history.location.pathname === "/"
      ? "dashboard"
      : history.location.pathname.split("/")[1];
  return (
    <div className="w-100 d-flex justify-content-between align-items-center">
      <h5 className="mb-0">{messages.pages[pathName]}</h5>
      <div className="d-flex align-items-center">
        <ProfileMenu />
        <LanguageBtn color="text-white" />
      </div>
    </div>
  );
}

export default injectIntl(Navbar);
