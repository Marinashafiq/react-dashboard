import React from "react";
import { injectIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../redux/actions/lang";
import { ButtonComponent } from "../Controls/Button/Button";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

function Navbar({ intl: { messages } }) {
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  return (
    <div className="w-100 d-flex justify-content-between align-items-center">
      <p className="mb-0">{messages.pages.dashboard}</p>
      <div className="d-flex align-items-center">
        <ProfileMenu />
        <ButtonComponent
          handleClick={() => dispatch(setLanguage(lang === "ar" ? "en" : "ar"))}
          content={messages.lang}
          variant="contained"
        />
      </div>
    </div>
  );
}

export default injectIntl(Navbar);
