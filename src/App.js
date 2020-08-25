import React from 'react';
import './App.css';
import Heading from "./components/heading.js";
import Form from "./components/form.js";


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
     const city = e.target.element.city.value;
     const country = e.target.element.country.value;
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
         
       })

     }
   }
  render() {
    return(
    <div>
      <Heading/>
      <Form/>
   </div>
   )
  }
 
}

export default App;
