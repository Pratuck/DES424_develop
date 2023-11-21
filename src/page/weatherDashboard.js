import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import styles from './weatherDashboard.module.css'
import HourlyForecast from './hourlyForecast';
const currentApiPredictPath="https://8mciuqteg9.execute-api.us-east-1.amazonaws.com/v1/dashboard/future"
const currentApiPath="https://8mciuqteg9.execute-api.us-east-1.amazonaws.com/v1/dashboard/current?province="
const fetchWeather = async (requestProvince) => {
  const configRequest={
    headers:{
      "x-api-key":"l0lLnJDN2T7Nuet3qHdzC3x0iTtPffwo3GcdavGo"
    }
  
  }
  if (!requestProvince) throw new Error("Province is required");
  const { data } = await axios.get(`${currentApiPath}${requestProvince}`,configRequest);
  const responses = await Promise.all([
    axios.get(`${currentApiPredictPath}1?province=${requestProvince}`,configRequest),
    axios.get(`${currentApiPredictPath}2?province=${requestProvince}`,configRequest),
    axios.get(`${currentApiPredictPath}3?province=${requestProvince}`,configRequest),
    axios.get(`${currentApiPredictPath}4?province=${requestProvince}`,configRequest),
    axios.get(`${currentApiPredictPath}5?province=${requestProvince}`,configRequest),
    axios.get(`${currentApiPredictPath}6?province=${requestProvince}`,configRequest),
   ])
  return { data,    
    prediction1: responses[0].data,
    prediction2: responses[1].data,
    prediction3: responses[2].data,
    prediction4: responses[3].data,
    prediction5: responses[4].data,
    prediction6: responses[5].data,

     };
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
  'Maha Sarakham', 'Tak', 'Phichit', 'Sisaket', 'Kalasin','Chiang_Mai', 'Chaing_Rai']

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
      enabled: requestProvince !== "",
      refetchOnWindowFocus: false, // Prevents refetching when the window gains focus
      refetchOnReconnect: false, // Prevents refetching when the browser reconnects to the internet
      refetchOnMount: true, // Enables refetching on mount
    }
  );
  if (isLoading) return (<div className={styles.weatherApp}>
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li><button><a style = {{color: 'white'}} href ="/statistic">Statistics</a></button></li>
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
            <li><button><a style = {{color: 'white'}} href ="/statistic">Statistics</a></button></li>
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
  const { fileContent: { current }, province } = data.data || {};


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
            <li><button><a style = {{color: 'white', fontFamily: "'Arial', sans-serif"}} href ="/statistic">Statistics</a></button></li>
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
        <div className={styles.rightPanel}>
        <HourlyForecast predictionData={data.prediction1}  image={`weatherIcons/${interpretWeatherCode(data.prediction1.wmo).replace(/ /g, "_")}.png`}/>
        <HourlyForecast predictionData={data.prediction2}  image={`weatherIcons/${interpretWeatherCode(data.prediction2.wmo).replace(/ /g, "_")}.png`}/>
        <HourlyForecast predictionData={data.prediction3}  image={`weatherIcons/${interpretWeatherCode(data.prediction3.wmo).replace(/ /g, "_")}.png`}/>
        <HourlyForecast predictionData={data.prediction4}  image={`weatherIcons/${interpretWeatherCode(data.prediction4.wmo).replace(/ /g, "_")}.png`} />
        <HourlyForecast predictionData={data.prediction5}  image={`weatherIcons/${interpretWeatherCode(data.prediction5.wmo).replace(/ /g, "_")}.png`} />
        <HourlyForecast predictionData={data.prediction6}  image={`weatherIcons/${interpretWeatherCode(data.prediction6.wmo).replace(/ /g, "_")}.png`}/>
      </div>
      </main>
     
    </div>
  );
}

export default Index;