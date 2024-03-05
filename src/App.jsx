import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    ph_no: '',
    email: '',
    submit: false,
    error: ''
  });

  const handleSubmit = () =>{
    if(userData.name && userData.age && userData.ph_no && userData.email) {
      setUserData({...userData, submit: true});
    } else {
      setUserData({...userData, error: "Please Fill all the details"});
    }
  }
  return (
    <>
      <div className="container w-25 mt-5 text-white">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" id="name" name="name" className="form-control" onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" id="name" name="name" className="form-control" onChange={(e) => setUserData({ ...userData, age: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="number" id="name" name="name" className="form-control" onChange={(e) => setUserData({ ...userData, ph_no: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" id="name" name="name" className="form-control" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
        </div>
        <div>
          <button className='btn btn-danger w-100 mt-3' onClick={ handleSubmit }>Submit</button>
          {
            userData.error &&
            <p className='text-danger'>{userData.error}</p>
          }
        </div>
      </div>
      {
        userData.submit && <div className="container w-25 mt-5 text-white border border-primary">
          <span><strong>Name:</strong> {userData.name}</span>
          <span><strong>Age:</strong> {userData.age}</span>
          <span><strong>Phone:</strong> {userData.ph_no}</span>
          <span><strong>Email:</strong> {userData.email}</span>
        </div>
      }
    </>
  )
}

export default App
