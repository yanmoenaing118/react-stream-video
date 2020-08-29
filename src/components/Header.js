import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./../styles/Header.module.scss";

import GoogleAuth from "./GoogleAuth";

const Header = (props) => {
  return (
    <div className={styles.Header}>
      <Link to="/" className={styles.Header__link}>
        Streamy
      </Link>
      <Link to="/streams/new" className={styles.Header__link}>
        New Stream
      </Link>
      <GoogleAuth />
      <div className={styles.Header__username}>{props.name}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    name: state.auth.name,
  };
};
export default connect(mapStateToProps)(Header);
