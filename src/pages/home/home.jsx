import React, { useEffect, useState } from "react";
import UsersList from "../../component/UserList/UserList";
import styles from "./home.module.css";
import AddEditUserForm from "../../component/AddEditUserForm/AddEditUserForm";
import Modal from "react-modal";
import Loader from "../../component/Loader/Loader";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Home() {
  const [userList, setUserList] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [openAddUserForm, setOpenAddNewUserForm] = useState(false);
  const [openEditUserForm, setOpenEditUserForm] = useState(false);
  const [editUserData, setEditUserData] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserList(data);
        setIsFetched(true);
      });
  }, []);

  const addNewUser = (userDetail) => {
    setUserList([...userList, userDetail]);
    setOpenAddNewUserForm(false);
  };

  if (isFetched) {
    return (
      <>
        <div className={styles.btnWrapper}>
          <button
            className={styles.addNewUserBtn}
            onClick={() => {
              setOpenAddNewUserForm(true);
            }}>
            Add new user +
          </button>
          {/* {openAddUserForm &&} */}
        </div>
        <div className={styles.marginTop16}>
          <UsersList
            userList={userList}
            deleteUser={(userId) => {
              const restOfTheUsers = userList.filter(
                (item) => item.id !== userId
              );
              setUserList(restOfTheUsers);
            }}
            editUser={(userData) => {
              //Open Modal
              setEditUserData(userData);
              setOpenEditUserForm(true);
            }}
          />
        </div>
        <Modal
          isOpen={openAddUserForm}
          onRequestClose={() => {
            setOpenAddNewUserForm(false);
          }}
          style={customStyles}
          contentLabel="Add new user">
          <AddEditUserForm
            addOrEditUser={addNewUser}
            label="Add User"
            title="Add New User"
          />
        </Modal>

        <Modal
          isOpen={openEditUserForm}
          onRequestClose={() => {
            setOpenEditUserForm(false);
          }}
          style={customStyles}
          contentLabel="Add new user">
          <AddEditUserForm
            userData={editUserData}
            addOrEditUser={(userData) => {
              const newUserList = userList.map((item) => {
                if (item.id === userData.id) {
                  return userData;
                } else {
                  return item;
                }
              });
              setUserList(newUserList);
              setOpenEditUserForm(false);
            }}
            label="Edit User"
            title="Edit User"
          />
        </Modal>
      </>
    );
  } else {
    return <Loader />;
  }
}

export default Home;
