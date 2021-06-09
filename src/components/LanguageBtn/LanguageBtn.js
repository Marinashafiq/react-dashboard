import React from "react";
import { injectIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../store/lang/actions";
import { ButtonComponent } from "../Controls/Button/Button";

function LanguageBtn({ intl: { messages } , color}) {
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  return (
    <ButtonComponent
      handleClick={() => dispatch(setLanguage(lang === "ar" ? "en" : "ar"))}
      content={messages.lang}
      textColor={color}
    />
  );
}

export default injectIntl(LanguageBtn);
