import {useState,useEffect} from "react";
import './App.css';

function App() {
  const initialValues ={username:"",email:"",password:""};
  const[formValue,setFormValue]=useState(initialValues);
  const[isSubmit,setIsSubmit]=useState(false);
  const[formErrors,setFormErrors]=useState({});

  const handleChange=(e)=>{
  console.log(e.target);
  const{name,value}=e.target;
  setFormValue({...formValue,[name]:value});
  console.log(formValue)
  };

  const handleSubmit=(e)=>{
   e.preventDefault(); 
   setFormErrors(validate(formValue));
   setIsSubmit(true);
  };
useEffect(()=>{
console.log(formErrors);
if(Object.keys(formErrors).length === 0 && isSubmit){
  window.alert("User details successfully submitted");
  console.log(formValue);
  setFormValue(initialValues);
}
},[formErrors]);
  const validate=(value)=>{
const errors = {};
if(!value.username){
  errors.username="Username is required";
}

if (!formValue.email) {
  errors.email="Email is required"; 
} else {
  errors.email=""; 
}
if(!value.password){
  errors.password ="password is required";
}
return errors;
  };
  return ( 
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="heading">Login Form</h1>
        <div className ="ui.form">
          <div className ="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" 
            value={formValue.username}
            onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Emailnam</label>
            <input type="email" name ="email" placeholder="Email" value={formValue.email}
            onChange={handleChange}/>
          </div>
          <p>{formErrors.Email}</p>
          <div className="field">
            <label>Password</label>
            <input type="password" name ="password" placeholder="Password" value={formValue.password}
            onChange={handleChange}/>
              <p>{formErrors.password}</p>
          </div>
          <div className="btn-container">
          <button className="fluid">Submit</button>
          </div>
          
        </div>
      </form>
     
    </div>
  );
}

export default App;
