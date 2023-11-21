import { Link } from 'react-router-dom';
import './register.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const registerPath="https://8mciuqteg9.execute-api.us-east-1.amazonaws.com/v1/register"
const Registers = () => {
  const [username,setUsername]=useState("");
  const [cPassword,setCPassword]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmai]=useState("")
  const [msg,setMsg]=useState("")
  const navigate = useNavigate();
  

  const submitHandler=(event)=>{
    event.preventDefault();
    if(username.trim()==="" ||password===""||email===""||cPassword===""){
      setMsg("All fields are required !")
      return
    }
    if(password!==cPassword){
      setMsg("Password does not match!")
      return
    }
    const requestConfig={
      headers:{
        "x-api-key":"l0lLnJDN2T7Nuet3qHdzC3x0iTtPffwo3GcdavGo"
      }
    }
    const requestBody={
      username:username,
      password:password,
      email:email
    }
    axios.post(registerPath,requestBody,requestConfig).then(
      response=>{
          setMsg("Account Created!")
          navigate("/login")
      }).catch(error=>{
        if(!error.response) return;
        if(error.response.status=== 401){
          setMsg(error.response.data.message)
        }else{
          setMsg("Sorry we cannot create your account right now")
        }
      })
      }
    
    return (
      <div className="body-register">
        <div className="page-regis">
          <div className='callum1'>
            <div className='block1'>
                
            </div>
            <div className='block2'>

            </div>
          </div>
          <div className='callum2'>
            <div className='rab'>
              <div>
                <h1>Register</h1>
                <form onSubmit={submitHandler}>
                <input type="text" value={email} onChange={event=>{setEmai(event.target.value)}} placeholder="EMAIL"></input>
                <br></br>
                <input type="text" value={username} onChange={event=>{setUsername(event.target.value)}} placeholder="USERNAME"></input>
                <br></br>
                <input type="password" value={password} onChange={event=>{setPassword(event.target.value)}}  placeholder="PASSWORD"></input>
                <br></br>
                <input type="password" value={cPassword} onChange={event=>{setCPassword(event.target.value)}}  placeholder="CONFIRM PASSWORD"></input>
                <br></br>
                <input className="inputSubmit" type='submit' value="Register"></input>
                </form>
                {msg&&<p >{msg}</p>}
              </div>
            </div>
            
            
          </div>
        </div>

      </div>
    )
  };
  
  export default Registers;