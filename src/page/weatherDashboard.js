import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import styles from './weatherDashboard.module.css'

const currentApiPath="https://y86e5uslt8.execute-api.us-east-1.amazonaws.com/v1/lambda?province="
const fetchWeather = async (requestProvince) => {
  const configRequest={
    headers:{
      "x-api-key":"52clg7ss2U5SZYE9PQCVs8GCzoAUBanO7SxDdhUF"
    }
  }
  if (!requestProvince) throw new Error("Province is required");
  const { data } = await axios.get(`${currentApiPath}${requestProvince}`,configRequest);
  return data;
};
const allProvinces = ['Roi Et', 'Phitsanulok', 'Kamphaeng Phet', 'Suphan Buri',
  'Samut Sakhon', 'Ubon Ratchathani', 'Bangkok', 'Krabi', 'Nakhon Phanom',
  'Chai Nat', 'Nan', 'Ranong', 'Chachoengsao', 'Nonthaburi', 'Chanthaburi', 'Chonburi',
  'Lopburi', 'Prachinburi', 'Ayutthaya', 'Phayao', 'Sakon Nakhon', 'Bueng Kan', 'Udon Thani',
  'Nakhon Pathom', 'Phang Nga', 'Phuket', 'Ang Thong', 'Yasothon', 'Satun', 'Buriram', 'Chaiyaphum',
  'Phatthalung', 'Chiang Rai', 'Phrae', 'Prachuap Khiri Khan', 'Surat Thani', 'Sa Kaeo', 'Surin',
  'Loei', 'Nakhon Nayok', 'Songkhla', 'Phetchaburi', 'Uthai Thani', 'Chiang Mai', 'Uttaradit', 'Sing Buri',
  'Nakhon Si Thammarat', 'Nong Khai', 'Phetchabun', 'Trat', 'Pathum Thani', 'Saraburi', 'Trang', 'Sukhothai',
  'Nong Bua Lamphu', 'Samut Songkhram', 'Rayong', 'Yala', 'Khon Kaen', 'Chumphon', 'Pattani', 'Amnat Charoen', 'Samut Prakan',
  'Narathiwat', 'Lampang', 'Nakhon Sawan', 'Mae Hong Son', 'Nakhon Ratchasima', 'Mukdahan', 'Ratchaburi', 'Lamphun', 'Kanchanaburi',
  'Maha Sarakham', 'Tak', 'Phichit', 'Sisaket', 'Kalasin']

const Index = () => {
  const [inputProvince, setInputProvince] = useState("")
  const [requestProvince, setRequestProvince] = useState("Bangkok")
  const [err,setErr]=useState("")
  const handleProvinceChange = (event) => {
    setInputProvince(event.target.value);
  };

  const { data, isError, isLoading, refetch } = useQuery(
    ['weather', requestProvince],
    () => fetchWeather(requestProvince),
    {
      enabled: requestProvince !== "" // This query will automatically run if requestProvince is not empty
    }
  );
  if (isLoading) return (<div className={styles.weatherApp}>
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li><a style = {{color: 'white'}} href ="/statistic">Statistics</a></li>
          <li>Help</li>
        </ul>
      </nav>
    </aside>
    <main className={styles.mainContent}>
      <header>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search For location"
            value={inputProvince}
            onChange={handleProvinceChange}
          />
          <button>Get Weather</button>
        </div>
      </header>
      <div className={styles.weatherDashboard}>
        Loading...
      </div>
    </main>
  </div>);
  if (!data) {
    return (<div className={styles.weatherApp}>
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Statistics</li>
          <li>Help</li>
        </ul>
      </nav>
    </aside>
    <main className={styles.mainContent}>
      <header>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search For location"
            value={inputProvince}
            onChange={handleProvinceChange}
          />
          <button>Get Weather</button>
        </div>
      </header>
      <div className={styles.weatherDashboard}>
        No Weather 
      </div>
    </main>
  </div>);;
  }

  if (isError) return 'An error has occurred';
  const { fileContent: { current }, province } = data || {};

  const handleSubmit = (event) => {
    event.preventDefault();
    if(allProvinces.includes(inputProvince)){
       setRequestProvince(inputProvince); // Set the requestProvince for the query
       refetch();
       setErr("")
    }else{
      setErr("No province founded")
    }
  };

  function interpretWeatherCode(code) {
    const weatherConditions = {
      0: "Clear Sky",
      1: "Mainly Clear",
      2: "Partly Cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Rime Fog",
      51: "Slight Drizzle",
      53: "Drizzle",
      55: "Heavy Drizzle",
      56: "Freezing Drizzle",
      57: "Heavy Freezing Drizzle",
      61: "Slightly Rain",
      63: "Rain",
      65: "Heavy Rain",
      66: "Freezing Rain",
      67: "Heavy Freezing Rain",
      71: "Slight Snow",
      73: "Snow",
      75: "Heavy Snow",
      77: "Snow Grains",
      80: "Slightly Rain Showers",
      81: "Rain Showers",
      82: "Heavy Rain Showers",
      85: "Snow Showers",
      86: "Heavy Snow Showers",
      95: "Thunderstorm",
      96: "Hail Thunderstorm",
      99: "Heavy Hail Thunderstorm"
    };

    return weatherConditions[code] || "Unknown weather code";
  }


  return (
    <div className={styles.weatherApp}>
      <aside className={styles.sidebar}>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li><a style = {{color: 'white'}} href ="/statistic">Statistics</a></li>
            <li>Help</li>
          </ul>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <header>
          <div className={styles.searchBar}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search For location"
                value={inputProvince}
                onChange={handleProvinceChange}
              />
              <button type="submit">Get Weather</button>
            </form>
            <p>{err}</p>
          </div>
        </header>
        <div className={styles.weatherDashboard}>
          <h2>{province}</h2>
          <div className={styles.weatherInfo}>
            <div className={styles.temperature}>{current.temperature_2m}°</div>
            <img src={`weatherIcons/${interpretWeatherCode(current.weather_code).replace(/ /g, "_")}.png`} alt={`${interpretWeatherCode(current.weather_code)}.png`} width="100" height="100"></img>
            <div className={styles.weatherDescription}>{interpretWeatherCode(current.weather_code)}</div>
            <div className={styles.details}>
              <div>Feels like {current.apparent_temperature}°</div>
              <div>Humidity {current.relative_humidity_2m}%</div>
              <div>Wind {current.wind_speed_10m}kph</div>
              <div>Pressure {current.pressure_msl}hpa </div>
            </div>
            <br></br>
            <div><span>updated: {current.time}</span></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Index;
