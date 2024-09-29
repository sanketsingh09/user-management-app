import React, { useState } from "react";
import styles from "./AddEditUserForm.module.css";

function AddEditUserForm(props) {
  const [formData, setFormData] = useState(
    props.userData
      ? props.userData
      : {
          name: "",
          email: "",
          phone: "",
        }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.phone) {
      console.log("User Data:", formData);
      setSubmitted(true);
      props.addOrEditUser(formData);
      setFormData({ name: "", email: "", phone: "" });
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>{props.title}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          {props.label}
        </button>
      </form>
    </div>
  );
}

export default AddEditUserForm;
