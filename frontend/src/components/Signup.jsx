import { useState } from "react";
import PasswordCreteria from "./PasswordCreteria.jsx";
import { TextField } from '@mui/material'

const Signup = ()=>{
    const [values, setValues] = useState({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
  const [ showTip, setShowTip] = useState(false);

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    return (
        <>
        <form>
           <div className="signup-form">
            <label id="name-lbl" style={{textAlign: "left"}}>First Name</label>
           <TextField
           name="fname"
           onChange={handleChange}
           value={values.fname}
            id="outlined-fname-input"
            type="text"
            autocomplete="off"
            size="small"
                placeholder="Enter email here"
            />

           <label id="lname-lbl" style={{textAlign: "left"}}>Last Name</label>
          <TextField
          onChange={handleChange}
          value={values.lname}
          name="lname"
          autocomplete="off"
            id="outlined-lname-input"
            type="text"
            size="small"
                placeholder="Enter email here"
            />
          <label id="phone-lbl" style={{textAlign: "left"}}>Phone Number</label>
          <TextField
          value={values.phone}
          onChange={handleChange}
          name="phone"
          autocomplete="off"
            id="outlined-phone-input"
            type="text"
            size="small"
                placeholder="Enter phone here"
            />
          <label id="email-lbl" style={{textAlign: "left"}}>Email Address</label>
        <TextField
        onChange={handleChange}
        name="email"
        value={values.email}
          id="outlined-email-input"
          type="text"
          autocomplete="off"
          size="small"
           placeholder="Enter email here"
        />
          <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}><label id="pwd-lbl">Password</label></div>
          <TextField
          onChange={handleChange} 
          onFocus={() => setShowTip(true)} 
          onBlur={() => setShowTip(false)} 
          name="password" 
          value={values.password}
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
            size="small"
                placeholder="Enter email here"
            />
          <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}><label id="pwd-lbl">Confirm Password</label></div>
           <TextField
           onChange={handleChange} 
           name="confirmPassword" 
           value={values.confirmPassword}
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
            size="small"
            placeholder="Enter email here"
        />
           </div>

          <button className="login-btn">Signup</button>
        </form>
        {showTip && <PasswordCreteria values={values}></PasswordCreteria>}
        {/* <PasswordCreteria values={values}></PasswordCreteria> */}
        </>
    )
}

export default Signup;