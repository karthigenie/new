import React, { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//import jwtDecode from "jwt-decode";

const Login = () => {
    const [login,setLogin] = useState('')
    const [password,setPassword]= useState('')
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[image,setImage]=useState('')
    const[logged,setLogged]=useState(false)


    const navigate = useNavigate();
    useEffect(() => {
      if(localStorage.getItem('twittertoken')){
        navigate("/select");
      }
  
    });
  function handleSocialLogin(e) {
    e.preventDefault();
    

    axios.post('http://18.136.104.1:5001/auth/login',{
      username:login,
      password:password
    }).then(response =>
      {localStorage.setItem("twittertoken", response.data.token)
    navigate("/select")
    }).catch(err => alert("Username/Password incorrect")) 
   /*  setTimeout(()=>{
      if(localStorage.getItem('twittertoken')){
        navigate("/select");
      }
      window.location.reload();

    },2000)
 */
  }
  function handleSocialSignup(e) {
    e.preventDefault();
  
    axios.post('http://18.136.104.1:5001/auth/register',{
      username:login,
      password:password,
      name:name,
      email:email,
      image:image
    }).then(response =>{
      axios.post('http://18.136.104.1:5001/auth/login',{
        username:login,
        password:password
      }).then(response =>{localStorage.setItem("twittertoken", response.data.token)
      navigate("/select")
      }).catch(err => alert(err)) 


    }).catch(err => alert(err)) 
   /*  setTimeout(()=>{
      window.location.reload();

    },3000) */

  }

  function handleInputChange(event) {
    setLogin(event.target.value);
}
function handleInputChanges(event) {
  setPassword(event.target.value);
}
function handleInputEmail(event) {
  setEmail(event.target.value);
}
function handleInputName(event) {
  setName(event.target.value);
}
function handleInputImage(event) {
  setImage(event.target.value);
}
  return (
    <div className="body" style={{backgroundColor:"#f0f2f5",height:"100vh",display:"flex",justifyContent:"space-around",alignItems:"center"}}> 
    <div className="css">
      <h1 style={{color:"blue"}}>iGenie</h1>
      <h2>iGenie is one stop platform for Non  <br /> Destructive Testing</h2>
      </div>
    <div className="shadow p-3 mb-5 bg-white rounded" style={{width:"40%",marginLeft:"",alignSelf:"center",borderRadius:"10px",backgroundColor:"white"}}>
      {logged === false &&
      <>
      <div className="" style={{}}> 
    
      </div>
      <div className="">
        <form id="form" className="form" onSubmit={e => handleSocialLogin(e)}>
          <div className="FormControl">
            <label htmlFor="email">Username</label>
            <input name="email" id="email" placeholder="Enter Username" className="form-control" onChange={handleInputChange} />
          </div>
          <div className="FormControl">
            <label htmlFor="password">Password</label>
            <input name="password" type='password' id="password" placeholder="Enter Password" className="form-control" onChange={handleInputChanges} />
          </div>
          <button className="FormButton button" style={{width:"100%",backgroundColor:"blue",marginTop:"20px",fontSize:"17",fontWeight:"bold"}}>Log in</button>
        </form>
        <div className="line"></div>
        <a className="button" onClick={()=>setLogged(true)} style={{color:"white",fontSize:"17",marginLeft:"22%",width:"400px"}}>Create New Account</a>
        <div>

          <span style={{ padding: "0 5px", color: "grey" }}>.</span>
        
        </div>
      
      </div>
   
      </>
}
{logged === true &&
<div>
<div className=""> 
       
        <h4>Create Account</h4>
      </div>
      <div className="">
        <form id="form" className="form" onSubmit={e => handleSocialSignup(e)}>
          <div className="FormControl">
            <label htmlFor="email">Username</label>
            <input name="email" id="email" placeholder="Enter Username"  className="form-control" onChange={handleInputChange} />
          </div>
          <div className="FormControl">
            <label htmlFor="password">Password</label>
            <input name="password" id="password" placeholder="Enter Password" className="form-control" onChange={handleInputChanges} />
          </div>
          <div className="FormControl">
            <label htmlFor="email">Email</label>
            <input name="email" id="email" placeholder="Enter Email" className="form-control" onChange={handleInputEmail} />
          </div>
          <div className="FormControl">
            <label htmlFor="name">Name</label>
            <input name="name" id="name" placeholder="Enter Name" className="form-control" onChange={handleInputName} />
          </div>
          <div className="FormControl">
            <label htmlFor="name">Profile Image</label>
            <input name="image" id="image"  accept="image/*" placeholder="Enter Image URL" className="form-control" onChange={handleInputImage} alt="image" />
          </div>
          <button className="FormButton" style={{width:"100%",backgroundColor:"blue",marginTop:"20px",fontSize:"17",fontWeight:"bold"}}>Signup</button>
        </form>
        <div className="line"></div>
       <a className="button" onClick={()=>setLogged(false)} style={{color:"white",fontSize:"17",marginLeft:"22%",width:"400px"}}>Login</a>
       
        <div>

          <span style={{ padding: "0 5px", color: "grey" }}>.</span>
        
        </div>
      
      </div>

</div>

}
    </div>
    </div>
  );
};
export default Login;