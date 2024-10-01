import { useState } from "react"
import wind from "../Images/wind img.png"
import humid from "../Images/humidity img.png"
export function Weather({ logo, temp, city, country, lat, lon,humids, winds }) {

    return (
        <>
            <div className="img">
                <img src={logo} alt="img" className="sun-img" />
            </div>
            <div className="temp">
                {temp}°C
            </div>
            <div className="location">
                {city}
            </div>
            <div className="country">
                {country}
            </div>
            <div className="cord">
                <div className="element">
                    <span className="lat">latitude</span>
                    <span>{lat}</span>
                </div>

                <div className="element">
                    <span className="lon">longtitude</span>
                    <span>{lon}</span>
                </div>

            </div >
            <div className="data-container">
                <div className="humid">
                    <img src={wind} className="wind" />
                    <div className="humid-per">{winds}kmph</div>
                <div className="text">Wind</div>

                </div>
                
                <div className="humid">
                    <img src={humid} className="wind" />
                    <div className="humid-per">{humids}%</div>
                <div className="text">Humidity</div>

                </div>
                

            </div>



        </>
    )
}
