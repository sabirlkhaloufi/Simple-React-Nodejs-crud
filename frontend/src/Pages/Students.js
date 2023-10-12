import React, { useState, useEffect } from "react";
import Api from "../Utils/Api";

export default function Students() {
  const [students, setStudents] = useState([]);
  const GetAllStudents = async () => {
    Api.get("/getall")
      .then((res) => {
        setStudents(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteStudent = async (id) => {
    Api.delete(`deletestudent/${id}`)
      .then((res) => {
        GetAllStudents();
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const filterStudents = async (e) => {
    if (e.target.value === "") {
      GetAllStudents();
    }else{
      const studentsFilter = await students.filter((value) => {
        return value.firstName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());
      });

      setStudents(studentsFilter);
    }
    
    
  };

  useEffect(() => {
    GetAllStudents();
  }, []);

  return (
    <div className="container rounded mt-5 bg-white p-md-5">
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          lastName
        </label>
        <input
          type="text"
          className="form-control"
          onChange={filterStudents}
          name="lastName"
          id="exampleInputPassword1"
        />
      </div>
      <div className="d-flex justify-content-between">
      
        <div className="h2 font-weight-bold">Students List</div>
        <a href="add" className="btn btn-primary">
          Add Student
        </a>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">firstName</th>
              <th scope="col">lastName</th>
              <th scope="col">Email</th>
              <th scope="col">dateOfBirth</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student) => (
              <>
                <tr id="spacing-row">
                  <td />
                </tr>
                <tr className="bg-blue">
                  <td className="pt-2">
                    {" "}
                    <img
                      src="https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="rounded-circle"
                      alt
                    />
                    <div className="pl-lg-5 pl-md-3 pl-1 name">
                      {student.firstName}
                    </div>
                  </td>
                  <td className="pt-3">{student.lastName}</td>
                  <td className="pt-3">{student.Email}</td>
                  <td className="pt-3">{student.dateOfBirth}</td>

                  <td
                    className="pt-3"
                    onClick={() => deleteStudent(student._id)}
                  >
                    <i
                      className="fa fa-trash-o text-danger h5"
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="pt-3">
                    <a href={`edit/${student._id}`}>
                      <i
                        className="fa fa-pencil-square-o text-warning h5"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
