const apiKey = "08d14a3ac2138221b175e0f9c45b9f89";

const getWeather = async(city)=>{
    return await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
}


export default getWeather;