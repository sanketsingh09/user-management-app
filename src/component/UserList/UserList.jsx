import React from "react";
import styles from "./UserList.module.css";
import { Link } from "react-router-dom";

const UsersList = (props) => {
  return (
    <div className={styles.container}>
      {props.userList?.map((item) => {
        return (
          <div key={item.phone}>
            <Link to={`/user-details/${item.id}`}>
              <div className={styles.content}>
                <div>
                  <span className={styles.title}>Name:</span> {item.name}
                </div>

                <div>
                  <span className={styles.title}>Email:</span> {item.email}
                </div>
                <div>
                  <span className={styles.title}>Phone:</span> {item.phone}
                </div>
                <div className={styles.buttonWrapper}>
                  <button
                    className={styles.btn}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      props.editUser(item);
                    }}>
                    Edit
                  </button>

                  <button
                    className={styles.btn2}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      props.deleteUser(item.id);
                    }}>
                    Delete
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
