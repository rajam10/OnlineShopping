import { TextField } from '@mui/material'

const Login = ()=>{
    return (
        <form className="login-form">
          <label id="email-lbl" style={{textAlign: "left"}}>Email Address</label>
          <TextField
          id="outlined-password-input"
          type="text"
          autoComplete="current-password"
          size="small"
           placeholder="Enter email here"
        />
          <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}><label id="pwd-lbl">Password</label><a href="#">Forgot password?</a></div>
          <TextField
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
            size="small"
            placeholder="Enter password here"
          />
          <div className="options">
            {/* <label>
              <input type="checkbox" /> Remember me for 30 days
            </label> */}
          </div>

          <button className="login-btn">Login to Account</button>
        </form>
    )
}

export default Login;