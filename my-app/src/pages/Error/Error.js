import React from "react";
import { Link } from "react-router-dom";
import ErrorCSS from "../../styles/Error.module.css";

export default function Error() {
  return (
    <div className={ErrorCSS.div}>
      <div className={ErrorCSS.main}>
        <div className={ErrorCSS.main}>
          <h1 className={ErrorCSS.h1}>404</h1>
          <p className={ErrorCSS.p}>
            Oups! La page que vous demandez n'existe pas.
          </p>
        </div>
        <div className={ErrorCSS.main}>
          <Link to="/" className={ErrorCSS.link}>
            Retourner sur la page d'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
