import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
      date: '08/15',
      apts: {
        '08/15': [8,9]
      }
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleStart(e) {
    this.setState({start: e.target.value});
  }

  handleEnd(e) {
    this.setState({end: e.target.value});
  }

  handleDate(e) {
    this.setState({date: e.target.value});
  }

  validate(date, start, end) {
    const errors = [];
  }

  handleSubmit(e) {
    e.preventDefault();
    let date = document.querySelector('.date').value;
    let start = document.querySelector('.start').value;
    let end = document.querySelector('.end').value;
    let apts = Object.assign({},this.state.apts);
    if (apts[date]) {
      let requestedTimes = [];
      for (let i = Number(start); i <= Number(end); i++) {
        requestedTimes.push(i);
      }
      this.setState({ apts: [...apts[date], ...requestedTimes] }, () => console.log(this.state));
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a date in the form mm/dd
          <input type="text" className="date" value={this.state.date} onChange={this.handleDate} />
        </label>
        <label>
          Start Time:
          <input type="text" className="start" value={this.state.start} onChange={this.handleStart} />
        </label>
        <label>
          End Time:
          <input type="text" className="end" value={this.state.end} onChange={this.handleEnd} />
        </label>
        <input type="submit" value="submit"/>
      </form>
    );
  }
}

export default App;
