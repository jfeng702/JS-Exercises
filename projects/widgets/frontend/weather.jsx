import React from 'react';

const toQueryString = obj => {
  const result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
    }
  }
  return result.join('&');
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null
    };
    this.pollWeather = this.pollWeather.bind(this);
  }

  componentDidMount() {

    navigator.geolocation.getCurrentPosition(this.pollWeather);
  }

  pollWeather(position) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?';
    const params = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };
    url += toQueryString(params);
    const secret = 'e3b9f04f70d953126d696f8c881df61e';
    url += `&APPID=${secret}`;
    url += '&units=imperial';

    var request = new XMLHttpRequest();
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.responseText);
        console.log(data);
        this.setState({
          weather: data,
          yo: 'WTF'
        }, console.log(this.state));
      }
    };

    request.open('GET', url, true);
    request.send();
  }

  render() {
    let content = <div></div>;

    if (this.state.weather) {
      const weather = this.state.weather;
      const temp = weather.main.temp;
      content = <div>
                  <p>{weather.name}</p>
                  <p>{temp} degrees</p>
                </div>;
    } else {
      content = <div className="loading">loading weather...</div>;
    }
    return (
      <div>
        <h1>Weather</h1>
        <div className="weather">
          {content}
        </div>
      </div>
    );
  }
}

export default Weather;
