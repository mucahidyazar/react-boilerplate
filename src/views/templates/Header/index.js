import React from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.menus}>
          <NavLink to="/">{t("home")}</NavLink>
          <NavLink to="/about">{t("about")}</NavLink>
        </div>
        <div className={styles.lang}>
          <input
            type="checkbox"
            id="languageCheckbox"
            className={styles.languageCheckbox}
          />
          <label htmlFor="languageCheckbox" className={styles.activeLanguage}>
            {i18n.language.toUpperCase()}
          </label>
          <div className={styles.languages}>
            <label
              htmlFor="languageCheckbox"
              className={
                styles.language +
                " " +
                (i18n.language === "tr" ? styles.languageActive : "")
              }
              onClick={() => changeLanguage("tr")}
            >
              TR
            </label>
            <label
              htmlFor="languageCheckbox"
              className={
                styles.language +
                " " +
                (i18n.language === "en" ? styles.languageActive : "")
              }
              onClick={() => changeLanguage("en")}
            >
              EN
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
