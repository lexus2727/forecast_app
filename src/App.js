import React from 'react';
import './App.css';
import Heading from "./components/heading.js";
import Form from "./components/form.js";
import Forecast from "./components/forecast.js";


const api_key = "c947bff56ae5911bc4532e0f0849eb41";

class App extends React.Component {

  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    pressure: "",
    icon: "",
    description: "",
    error: ""
  }

   getWeather = async (e) => {
     const city = e.target.elements.city.value;
     const country = e.target.elements.country.value;
     e.preventDefault();
     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&APPID=${api_key}`)

     const response = await api_call.json(); //if city and state are inputted correctly then ..
     if(city && country) {
       this.setState({
         temperature: response.main.temp, //main.temp was the name of the parameter in the api
         city: response.name,
         country: response.sys.country,
         humidity: response.main.humidity,
         pressure: response.main.pressure,
         icon: response.weather[0].icon, //will have an array of different icons so set it to [0]
         description: response.weather[0].description, //will have an array of different descriptions
         error: ""
      })
    } else{
      this.setState({
        error: "Please fill out imput fields..." //if someone doesn't fill out the form they'll get this statement in return
      })
    }
  }
  render() {
    return(
    <div>
      <Heading/>
      <Form loadWeather={this.getWeather} />
      <Forecast 
      temperature={this.state.temperature} 
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      pressure={this.state.pressure}
      icon={this.state.icon}
      description={this.state.description}
      error={this.state.error}/>
      
   </div>
   )
  }
 
}

export default App;
