import React from 'react';

const Forecast = (props) => {
    return(                  //name of the props I'm grabbing from api to display to browser
        <div>
            {props.country && props.city && <p>Location:  {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.humidity && <p>Humidity:  {props.humidity}</p>}
            {props.pressure && <p>Pressure:  {props.pressure}</p>}
            {props.icon && <img src={`http://openweathermap.org/img/wn/${props.icon}.png`} alt= "weather icon"/> }
            {props.description && <p>Conditions:  {props.description}</p>}
            {props.error && <p>{props.error}</p>}
         </div>
    )

}




export default Forecast;