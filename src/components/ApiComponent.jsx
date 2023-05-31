import { useEffect, useState } from "react";
import axios from "axios";

const ApiComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>Weather Data</h2>
          <p>Temperature: {data.main.temp} K</p>
          <p>Humidity: {data.main.humidity} %</p>
          <p>Visibility: {data.main.visibility}</p>
        </div>
      ) : (
        <p>Cargando datos del clima...</p>
      )}
    </div>
  );
};

export default ApiComponent;
