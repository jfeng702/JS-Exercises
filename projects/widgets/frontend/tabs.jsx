import React from 'react';

const Headers = (props) => {
  let panes = props.panes.map((tab, id) => {
    const klass = id === props.selectedPane ? 'active' : '';
    return (
      <h1
        onClick={props.selectHandler}
        data-value={id}
        key={id}
        className={klass}
      >
        {tab.title}
      </h1>
    );
  });

  return (
    <ul>
      {panes}
    </ul>
  );
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPane: 0
    };

    this.selectHandler = this.selectHandler.bind(this);
  }

  selectHandler(e) {
    this.setState({
      selectedPane: Number(e.target.dataset.value)
    }, () => {
      console.log(this.state);
    });
  }

  render() {
    const { panes } = this.props;
    return (
      <div>
        <h1>Tabs</h1>
        <div className="tabs">
          <Headers
            panes={panes}
            selectHandler= {this.selectHandler}
            selectedPane={this.state.selectedPane}
            />
          <article className="tab-content">
            {panes[this.state.selectedPane].content}
          </article>
        </div>
      </div>
    );
  }
}

export default Tabs;
