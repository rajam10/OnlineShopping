import { useState } from "react";
import PasswordCreteria from "./PasswordCreteria.jsx";

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
          <input onChange={handleChange} name="fname" value={values.fname} id="fname" type="text" placeholder="Enter your first name here" />

           <label id="lname-lbl" style={{textAlign: "left"}}>Last Name</label>
          <input onChange={handleChange} name="lname" value={values.lname} id="lname" type="text" placeholder="Enter your last name here" />

          <label id="phone-lbl" style={{textAlign: "left"}}>Phone Number</label>
          <input onChange={handleChange} name="phone" value={values.phone} id="phoneno" type="text" placeholder="+91 1234567890" />

          <label id="email-lbl" style={{textAlign: "left"}}>Email Address</label>
          <input onChange={handleChange} name="email" value={values.email} id="email" type="email" placeholder="name@example.com" />

          <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}><label id="pwd-lbl">Password</label></div>
          <input onChange={handleChange} onFocus={() => setShowTip(true)} onBlur={() => setShowTip(false)} name="password" value={values.password} id="pwd" type="password" autoComplete="off" placeholder="Enter your password here" />

          <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}><label id="pwd-lbl">Confirm Password</label></div>
          <input onChange={handleChange} name="confirmPassword" value={values.confirmPassword} id="cpwd" type="password" autoComplete="off" placeholder="Enter your password here" />
           </div>

          <button className="login-btn">Signup</button>
        </form>
        {showTip && <PasswordCreteria values={values}></PasswordCreteria>}
        {/* <PasswordCreteria values={values}></PasswordCreteria> */}
        </>
    )
}

export default Signup;