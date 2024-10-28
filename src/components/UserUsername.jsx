import PropTypes from "prop-types";
import React from "react";
import styles from "./style.module.css";

export function UserUsername(props) {
  return (
    <>
      {/* <b
        style={{
          fontSize: "32px",
          color: "red",
        }}
      >Username: </b> */}
      <b className={styles.username}>Username: </b>
      <span>{props.username}</span>
    </>
  );
}

UserUsername.propTypes = {
  username: PropTypes.string.isRequired,
}