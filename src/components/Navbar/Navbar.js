import React from "react";
import { injectIntl } from "react-intl";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import LanguageBtn from "../LanguageBtn/LanguageBtn";

function Navbar({ intl: { messages } }) {
  return (
    <div className="w-100 d-flex justify-content-between align-items-center">
      <p className="mb-0">{messages.pages.dashboard}</p>
      <div className="d-flex align-items-center">
        <ProfileMenu />
        <LanguageBtn color="text-white"/>
      </div>
    </div>
  );
}

export default injectIntl(Navbar);
