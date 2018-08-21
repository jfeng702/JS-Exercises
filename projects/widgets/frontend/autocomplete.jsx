import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputVal: e.target.value
    }, console.log(this.state));
  }

  handleClick(e) {
    this.setState({
      inputVal: e.target.innerHTML
    }, console.log(this.state));
  }

  render(){
    console.log(this.props);
    let { inputVal } = this.state;
    console.log(inputVal);
    return (
      <div>
        <h1>Autocomplete</h1>
        <div className="auto">
          <form>
            <input
              type="text"
              value={this.state.inputVal}
              onChange={this.handleChange} />
          </form>
          <ul>
            <ReactCSSTransitionGroup
              transitionName="auto"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {this.props.names
                .filter(name => {
                  return name.slice(0, inputVal.length).toLowerCase() ===
                  inputVal.toLowerCase();
                })
                .map((name,id) => {
                  return <li key={id} onClick={this.handleClick}>{name}</li>;
                  })}
            </ReactCSSTransitionGroup>
              </ul>
            </div>
      </div>
    );
  }
}

export default Autocomplete;
