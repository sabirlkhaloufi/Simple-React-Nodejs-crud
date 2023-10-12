import React, {useState , useEffect } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import Api from '../Utils/Api'
import Students from './Students';

function EditStudent() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(false)

  const {id} = useParams();

	const onChange = (e)=>{
		setFormData((prevState) =>({
			...prevState,
			[e.target.name]:e.target.value
		}))
	}


  const getStudent = async () => {
    Api.get(`getstudent/${id}`).then((res) => {
      console.log(res.data);
      setFormData(res.data)
    }).catch((err) => console.log(err))
  }

  const UpdateStudent = async (e) => {
    e.preventDefault();
    console.log(formData);
    Api.put(`updatestudent/${id}`,formData).then((res) => {
      console.log(res.data);
      navigate('/')
    }).catch((err) => console.log(err))
  }
  

  useEffect(() => {
    getStudent();
  }, []);
  return (
    <form onSubmit={UpdateStudent} className='px-5 py-5 mx-5'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" >firstName</label>
    <input type="text" value={formData.firstName} className="form-control" onChange={onChange} id="exampleInputEmail1" name='firstName' aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">lastName</label>
    <input type="text" value={formData.lastName} className="form-control" onChange={onChange} name='lastName' id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Email
    </label>
    <input type="email" value={formData.Email} className="form-control" onChange={onChange} id="exampleInputPassword1" name='Email' />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">dateOfBirth</label>
    <input type="date" className="form-control" value={formData.dateOfBirth}  onChange={onChange} id="exampleInputPassword1" name='dateOfBirth' />
  </div>
  
  <button type="submit" className="btn btn-primary">Save</button>
</form>

  )
}

export default EditStudent