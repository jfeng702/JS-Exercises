import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

function Root() {
  let panes = [
    {title: 'one', content: 'first!'},
    {title: 'two', content: 'second'},
    {title: 'three', content: 'third'}];
  return (
    <div>
      <Clock />
      <Tabs panes={panes}/>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />, document.getElementById('main')
  );
});
