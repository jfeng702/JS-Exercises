import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = 0;
  }

  render(){
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let dateString = this.state.time.toDateString();

    return(
        <div className="clock">
          <p>
            <span>Time: </span>
            <span>{`${hours}:${minutes}:${seconds} PDT`}</span>
          </p>
          <p>
            <span>Date: </span>
            <span>{`${dateString}`}</span>
          </p>
        </div>
    );
  }
}

export default Clock;
