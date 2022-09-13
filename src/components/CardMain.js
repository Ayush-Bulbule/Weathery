import React, { useState, useEffect } from 'react'
import sunny from '../images/sunny.png'
import clouds from '../images/clouds.png'
import sunset from '../images/sunset.png'
import sunrise from '../images/sunrise.png'
import humidity from '../images/humidity.png'
import windspeed from '../images/windspeed.png'
import airpressure from '../images/airpressure.png'

const CardMain = ({ lat, lon }) => {

    const [data, setData] = useState();
    const date = new Date().toDateString()

    useEffect(() => {
        const fetchData = async () => {


            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}8&lon=${lon}&units=metric&appid=e8e6e8b304e55c1893820806af32fa81`
            const response = await fetch(url)
            const resJson = await response.json()

            setData(resJson);
        }
        fetchData();
    }, [lat, lon]);

    const getTime = (unixtime) => {
        const d = new Date(unixtime * 1000)
        let hh = (d.getHours() < 10 ? '0' : '') + d.getHours();
        let mm = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();

        return (`${hh}:${mm}`)
    }
    const getWeatherIcon = (weather) => {
        console.log("weather" + weather)
        if (weather === "Sunny") {
            return sunny
        } else if (weather === 'Clouds') {
            return clouds
        }
    }
    return (
        <>
            {(typeof data != 'undefined') ? (
                <div className="container-fluid mx-0">
                    <div className="row">
                        <div className="weather-box col-lg-5 col-md-5 col-10  mx-auto m-4 p-4">
                            <div className="weather-main d-flex align-items-center justify-content-center">
                                <div className="img-box">
                                    <img className="img-fluid px-4" src={getWeatherIcon(data.weather[0].main)} alt="Sunny" />
                                    <div className="d-flex justify-content-evenly mt-2">
                                        <div className="weather-sub-info d-flex align-items-center justify-content-center">
                                            <img src={sunrise} alt="Sunrise" style={{ width: "2rem", height: "2rem" }} />
                                            <p>{getTime(data.sys.sunrise)}</p>
                                        </div>
                                        <div className="weather-sub-info d-flex align-items-center">
                                            <img src={sunset} alt="Sunrise" style={{ width: "2rem", height: "2rem" }} />
                                            <p>{getTime(data.sys.sunset)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="weather-data ms-lg-4">
                                    <h1 className="display-3">{data.main.temp}॰C</h1>
                                    <h3>{data.weather[0].main}</h3>
                                    <h4>📍 {data.name},{data.sys.country}</h4>
                                    <p>{date}</p>
                                </div>
                            </div>
                            <div className="weather-sub mt-3 d-flex justify-content-around">
                                <div className="weather-sub-info d-flex align-items-center">
                                    <img src={airpressure} alt="Sunrise" style={{ width: "2rem", height: "2rem" }} />
                                    <p>{data.main.pressure}hPa</p>
                                </div>
                                <div className="weather-sub-info d-flex align-items-center">
                                    <img src={humidity} alt="Sunrise" style={{ width: "2rem", height: "2rem" }} />
                                    <p>{data.main.humidity}</p>
                                </div>
                                <div className="weather-sub-info d-flex align-items-center">
                                    <img src={windspeed} alt="Sunrise" style={{ width: "2rem", height: "2rem" }} />
                                    <p>{data.wind.speed}m/s</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>) : (
                <h1 className="text-center">Loading..</h1>)
            }
        </>)
}

export default CardMain
