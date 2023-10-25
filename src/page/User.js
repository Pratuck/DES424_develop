import './Layout.css'
import './register.css'
import './User.css'
import userImage from "./img/Lakeside_Sunrise_3840x2160.jpg";

const User = () => {

  let api = "sample api";
  let imgscr = userImage;

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
              <input name = "Username" value = "placeholder" disabled />
            </li>
            <li>
              <label>Login Date</label>
              <input name = "date" value = "placeholder" disabled />
            </li>
            <li>
              <label>Token</label>
              <input name = "Token" value = "placeholder" disabled />
            </li>
            <li>
              <button name = "requestToken">Request Token</button>
            </li>
          </ul>
        </div>
      </div>
      <div class = "user-APIkey">
        <label>Click to copy API: </label>
        <label class = "apikey">{api}</label>
      </div>
    </div>
  );
};
  
export default User;