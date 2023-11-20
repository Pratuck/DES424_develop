import React, { useState } from 'react';
import './Layout.css'
import './register.css'
import './User.css'
import styles from './weatherDashboard.module.css'
function ShowIframe(url){
    return (
      <div style={{flex: 6}}>
        <iframe class = "dashboard" src= {url}/>
        <div class = "user-APIkey"><a href= {url}>Didn't see this dashboard?</a></div>
      </div>  
    );
}


//change map at wish here UwU
const Statistics = (props) => {

    //#region URL
    //Temp urls
    const mapTempUrl = "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/107837149840/dashboards/fef8dfcb-6dd6-43cf-b605-aa67197aa583/sheets/fef8dfcb-6dd6-43cf-b605-aa67197aa583_6ff6fbad-2a45-420f-b25a-6ba59d4a0233/visuals/fef8dfcb-6dd6-43cf-b605-aa67197aa583_fe7ab8f4-9056-4d62-a50e-3ee39af35d7c?directory_alias=pongsapon2425";
    const allUrl = "https://us-east-1.quicksight.aws.amazon.com/sn/accounts/107837149840/dashboards/fef8dfcb-6dd6-43cf-b605-aa67197aa583?directory_alias=pongsapon2425"
    //#endregion 

    const [url, setUrl] = useState("");

    return <div class = "body-user" style={{flexDirection:'row', justifyContent:'space-around'}}>
   
      <aside className={styles.sidebar}>
        <nav style={{flex: 1, backgroundColor:"#2C3E50"}}>
            <ul style = {{listStyle:'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <li><button class = "sidebarbutton" onClick={() => setUrl(mapTempUrl)} >Map Tempurature</button></li>
                <li><button class = "sidebarbutton"onClick={() => setUrl(mapTempUrl)} >Choose with region</button></li>
            </ul>
        </nav>
       </aside>
       {ShowIframe(url)}
    </div>
   };


  
export default Statistics;