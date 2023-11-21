
import styles from './HourlyForecast.module.css';

// HourlyForecast component
const HourlyForecast = ({ predictionData,image }) => {
    const tempInput=predictionData.temperature
    const timeInput = predictionData.timestamp
    const temp=tempInput.toFixed(1)
    const time=timeInput.split(' ')[1]
  return (
    <div className={styles.hourlyForecastContainer}>
    
        <div className={styles.forecastCard}>
          <div className={styles.forecastTime}>{time}</div>
          <img
            className={styles.weatherIcon}
            src={image}
            alt={image}
          />
          <div className={styles.temperature}>{temp}°</div>
        </div>
    </div>
  );
};

export default HourlyForecast;