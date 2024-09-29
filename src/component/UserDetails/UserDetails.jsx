import React from "react";
import styles from "./UserDetail.module.css";

const UserDetails = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.description}>
          <span className={styles.title}>Name:</span> {props.userDetail?.name}
        </div>
        <div className={styles.description}>
          <span className={styles.title}>Address:</span> {props.userDetail?.address?.suite},{" "}
          {props.userDetail?.address?.street} {props.userDetail?.address?.city}{" "}
          {props.userDetail?.address?.zipcode}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
