import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
      date: '',
      currentDate: this.getDate(),
      apts: {
        '08/15': [8,9]
      },
      errors: {}
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValidation() {
    let isValid = true;
    let errors = {};
    const { date, currentDate, start, end, apts } = this.state;
    if (date === '' || start === '' || end === '') {
      isValid = false;
      errors['form'] = 'Please fill out all fields'
    }
    // date has to be in future
    // check month
    if (date.slice(0,2) < currentDate.slice(0,2) ) {
      isValid = false;
      errors['date'] = 'Date has to be in the future';
    } else if (date.slice(0,2) === currentDate.slice(0,2)) {
      // check date
      if (date.slice(3,5) < currentDate.slice(3,5) + 1) {
        isValid = false;
        errors['date'] = 'Date has to be in the future';
      }
    }
    // time/date cannot conflict with existing appts
    if (apts[date]) {
      let requestedTimes = [];
      for (let i = Number(start); i < Number(end); i++) {
        requestedTimes.push(i);
      }
      for (let time of requestedTimes) {
        if (apts[date] && apts[date].includes(time)) {
          isValid = false;
          errors['time'] = 'Time conflict';
        }
      }
    }
    this.setState({errors})
    return isValid;
  }


  getDate() {
    let today = new Date();
    let mm = today.getMonth()+1;
    mm = (mm < 10 ? '0' + mm : mm);
    let dd = today.getDate();
    return mm + '/' + dd;
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


  handleSubmit(e) {
    e.preventDefault();
    const { date, start, end, apts } = this.state;
    // let apts = Object.assign({},this.state.apts);

    if (this.handleValidation()) {
      let requestedTimes = [];
      for (let i = Number(start); i < Number(end); i++) {
        requestedTimes.push(i);
      }
      let priorTimes;
      if (apts[date]) {
        priorTimes = apts[date];
      } else {
        priorTimes = [];
      }
      this.setState(prevState => ({
        ...prevState,
        apts:{
          ...prevState.apts,
          [date]: [
            ...priorTimes,
            ...requestedTimes
          ]
        }
      }), () => console.log(this.state));
      alert('appointment scheduled')
    }
  }

  render() {
    return (
      <div className="outer">
        <h1>Schedule an Appointment</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form">
            <label>
              Enter a date in the form mm/dd:
              <input type="text" className="date" value={this.state.date} onChange={this.handleDate} />
              <h5 style={{color: 'red'}}>{this.state.errors['date']}</h5>
            </label>
            <label>
              Start Time (+12 for pm):
              <input type="text" className="start" value={this.state.start} onChange={this.handleStart} />
              <h5 style={{color: 'red'}}>{this.state.errors['form']}</h5>
            </label>
            <label>
              End Time (+12 for pm):
              <input type="text" className="end" value={this.state.end} onChange={this.handleEnd} />
              <h5 style={{color: 'red'}}>{this.state.errors['time']}</h5>
            </label>
            <input type="submit" value="submit" className="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
