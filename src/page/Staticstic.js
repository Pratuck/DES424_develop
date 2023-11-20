import React, { useState } from 'react';
import './Layout.css'
import './register.css'
import './User.css'

import './weatherDashboard.module.css'
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

    const [url, setUrl] = useState("");

    //#region URL
    //Temp urls
    const mapTempUrl = "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/107837149840/dashboards/4c7aeacb-9527-46b9-9036-fcad6a9d9333/sheets/4c7aeacb-9527-46b9-9036-fcad6a9d9333_6ff2820e-4f13-4b0d-ac0e-1c27b8b69234/visuals/4c7aeacb-9527-46b9-9036-fcad6a9d9333_256f4797-9cfa-4240-b366-cf639786e2ca?directory_alias=pongsapon2425";
    const hottestTempProvUrl = "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/107837149840/dashboards/4c7aeacb-9527-46b9-9036-fcad6a9d9333/sheets/4c7aeacb-9527-46b9-9036-fcad6a9d9333_6ff2820e-4f13-4b0d-ac0e-1c27b8b69234/visuals/4c7aeacb-9527-46b9-9036-fcad6a9d9333_6a41ee5b-0c09-4edd-9046-423e8d57f000?directory_alias=pongsapon2425";
    const coldestTempProvUrl = "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/107837149840/dashboards/4c7aeacb-9527-46b9-9036-fcad6a9d9333/sheets/4c7aeacb-9527-46b9-9036-fcad6a9d9333_6ff2820e-4f13-4b0d-ac0e-1c27b8b69234/visuals/4c7aeacb-9527-46b9-9036-fcad6a9d9333_e9073576-912d-4d7a-894d-7ca45cf72340?directory_alias=pongsapon2425";
    const allTemp = "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/107837149840/dashboards/4c7aeacb-9527-46b9-9036-fcad6a9d9333/sheets/4c7aeacb-9527-46b9-9036-fcad6a9d9333_6ff2820e-4f13-4b0d-ac0e-1c27b8b69234/visuals/4c7aeacb-9527-46b9-9036-fcad6a9d9333_60ad15eb-c444-4948-90a9-6cddc5acc0ef?directory_alias=pongsapon2425";
    //Humidity urls;
    const mapHumidityUrl = "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/107837149840/dashboards/4c7aeacb-9527-46b9-9036-fcad6a9d9333/sheets/4c7aeacb-9527-46b9-9036-fcad6a9d9333_6ff2820e-4f13-4b0d-ac0e-1c27b8b69234/visuals/4c7aeacb-9527-46b9-9036-fcad6a9d9333_42d07566-a5a1-4800-a064-80fee85ff20a?directory_alias=pongsapon2425";
    const highestHumidProvUrl = "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/107837149840/dashboards/4c7aeacb-9527-46b9-9036-fcad6a9d9333/sheets/4c7aeacb-9527-46b9-9036-fcad6a9d9333_6ff2820e-4f13-4b0d-ac0e-1c27b8b69234/visuals/4c7aeacb-9527-46b9-9036-fcad6a9d9333_cf476cf0-7e05-42dc-8f03-dc88afb3cc1e?directory_alias=pongsapon2425";
    const lowestHumidProvUrl = "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/107837149840/dashboards/4c7aeacb-9527-46b9-9036-fcad6a9d9333/sheets/4c7aeacb-9527-46b9-9036-fcad6a9d9333_6ff2820e-4f13-4b0d-ac0e-1c27b8b69234/visuals/4c7aeacb-9527-46b9-9036-fcad6a9d9333_0cfc518c-939e-41a5-8f5b-a422fbc9fa40?directory_alias=pongsapon2425";
    const allHumid = "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/107837149840/dashboards/4c7aeacb-9527-46b9-9036-fcad6a9d9333/sheets/4c7aeacb-9527-46b9-9036-fcad6a9d9333_6ff2820e-4f13-4b0d-ac0e-1c27b8b69234/visuals/4c7aeacb-9527-46b9-9036-fcad6a9d9333_0bab4fdb-e9ee-4549-a082-3d4c430ac039?directory_alias=pongsapon2425";
    //#endregion 

    return <div class = "body-user" style={{flexDirection:'row', justifyContent:'space-around'}}>
   
       <nav class = "sidebar">
           <ul style = {{listStyle:'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
               <li style={{marginBottom: 10,cursor:'pointer'}} onClick={() => setUrl(mapTempUrl)} >Tempurature</li>
               <li style={{marginBottom: 10,cursor:'pointer'}} onClick={() => setUrl(mapHumidityUrl)}>Humidity</li>
           </ul>
       </nav>
       {ShowIframe(url)}
    </div>
   };


  
export default Statistics;