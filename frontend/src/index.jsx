import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};


class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = 
      icon: "",
      lati: "",
      longit: "",
    };
  }

  async componentDidMount() {
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position)=> {
	      const { latitude, longitude } = position.coords;
	      this.setState({ lati: latitude, longit: longitude });
    	},
	error
    }; else {
	    console.log("Geolocation not supported");
    }

    const weather = await getWeatherFromApi();
    this.setState({ icon: weather.icon.slice(0, -1) });
  }

  render() {
    const { icon, lati, longit} = this.state;

    return (
      <div className="icon">
        <h1>{`${lati}`} </h1>
        <h1>{`${longit}`}</h1>
	<h1> TEST </h1>
        { icon && <img src={`/img/${icon}.svg`} alt="weather app" /> }
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
