import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    };
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    setInterval(this.tick, 1);
  }

  componentDidUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return(
        <div>
          <h1>Hello there!</h1>
          <h1>{`${this.state.time}`}</h1>
        </div>
    );
  }
}

export default Clock;
