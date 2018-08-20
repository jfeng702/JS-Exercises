import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

function Root() {
  let panes = [
    {title: 'one', content: 'first!'},
    {title: 'two', content: 'second'},
    {title: 'three', content: 'third'}];
  return (
    <div>
      <Clock />
      <Tabs panes={panes}/>
      <Weather />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />, document.getElementById('main')
  );
});
