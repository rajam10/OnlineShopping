const Login = ()=>{
    return (
        <form className="login-form">
          <label id="email-lbl" style={{textAlign: "left"}}>Email Address</label>
          <input id="email" type="email" placeholder="name@example.com" />

          <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}><label id="pwd-lbl">Password</label><a href="#">Forgot password?</a></div>
          <input id="password" type="password" placeholder="abcd@123" autoComplete="off" />

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