import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../Utils/Api";

function AddStudent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const AddStudent = async (e) => {
    e.preventDefault();
    addStudent();
  };

  const addStudent = async () => {
    console.log(formData);
    Api.post("/addstudent", formData)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={AddStudent} className="px-5 py-5 mx-5">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          firstName
        </label>
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          id="exampleInputEmail1"
          name="firstName"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          lastName
        </label>
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          name="lastName"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          onChange={onChange}
          id="exampleInputPassword1"
          name="Email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          dateOfBirth
        </label>
        <input
          type="date"
          className="form-control"
          onChange={onChange}
          id="exampleInputPassword1"
          name="dateOfBirth"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default AddStudent;
