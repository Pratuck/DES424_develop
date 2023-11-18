import './Layout.css'
import './register.css'
import './User.css'
import userImage from "./img/Lakeside_Sunrise_3840x2160.jpg";
import React, {  useState } from 'react';
import { getUser } from '../services/AuthService';



const User = () => {
  const [validRequest,setValidReauest]=useState(true)
  const [copied, setCopied] = useState(false);

  const username=getUser().username
  const token=getUser().apikey.S
  let imgscr = userImage;
  const getApi=()=>{
    setValidReauest(false)
  }
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
  return (
    <div class = "body-user">
      <div class = "row">
        <div class = "user-image">
          <img class = "user-image" src = {imgscr} alt = "Your profile" draggable = "false"/>
        </div>
        <div class = "user-profile">
          <ul>
            <li>
              <label>Username</label>
              <input name = "Username" value = {username} disabled />
            </li>
            <li>
              <label>Token status</label>
              <input name = "date" value = "valid" disabled style={{ color: 'green' }}/>
            </li>
            <li>
              {validRequest&&<button name = "requestToken"  onClick={getApi}>Request Token</button>}
            </li>
          </ul>
        </div>
      </div>
      {!validRequest&&<div>
        <label>Click to copy API: </label>
        <div>
        <button className="apikey-button" onClick={() => copyToClipboard(token)}>{token}</button>
        </div>
        {copied && <span style={{ color: 'green' }}>Copied!</span>}
        </div>
        }
        
    </div>
  );
};
  
export default User;