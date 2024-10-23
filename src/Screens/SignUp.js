import axios from "axios";
import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";


const SignUp = ()=>{
   
  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
    phoneNumber:"",
    userType:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData,[name]: value});
  };  

  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
  
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Pasword and Confirm Password fields don't match!");
      return;
    }
  
    // Applying all the criteria for the password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,13}$/;
    if (!passwordRegex.test(formData.password)) {
      alert("Password must be 8-13 characters long and contain at least one special character, one uppercase letter, one lowercase letter, and one number.");
      return;
    }

    try {

      const response = await axios.post('http://localhost:4000/api/submitSignUp', formData);
      console.log(response);
      
      setFormData({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phoneNumber: '',
        userType: '',
      });
      alert('Sign up successful!');
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data === 'Username already exists') {
        alert('Username already exists. Please choose a different one.');
      } else {
        alert('Error submitting form. Please try again later.');
      }
    }
  };

    return (
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Create Account</h1>
          <p className="col-lg-10 fs-4">It's fast and easy to get started! Fill out the form below, and within minutes, you’ll have access to all the tools you need to manage your files securely and efficiently.!
</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
            <div >
              <label >Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div >
              <label >Email address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div >
              <label >Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div >
              <label >Confirm Password</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <div >
              <label >Phone Number</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </div>
            <div >
              <label >UserType</label>
              <input type="text" name="userType" value={formData.userType} onChange={handleChange} placeholder="user" required />
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            <hr className="my-4"/>
            <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
            <br/>
            <small>Already a user? <Link to={"/login"}>Login here</Link></small>
          </form>
        <div><p></p></div>
        </div>
      </div>
    </div>
      );
};

export default SignUp;
