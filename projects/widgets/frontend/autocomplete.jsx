import React from 'react';

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
    return (
      <div className="auto">
        <form>
          <input
            type="text"
            value={this.state.inputVal}
            onChange={this.handleChange} />
        </form>
        <ul>
          {this.props.names
            .filter(name => name.slice(0, inputVal.length) === inputVal)
            .map((name,id) => {
              return <li key={id} onClick={this.handleClick}>{name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
