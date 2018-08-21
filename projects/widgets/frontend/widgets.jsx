import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

function Root() {
  let panes = [
    {title: 'one', content: 'first!'},
    {title: 'two', content: 'second'},
    {title: 'three', content: 'third'}];

  let names = [
    'Abba',
    'Barney',
    'Barbara',
    'Jeff',
    'Jenny',
    'Sarah',
    'Sally',
    'Xander'
  ];

  return (
    <div>
      <Clock />
      <Tabs panes={panes}/>
      <Weather />
      <Autocomplete names={names}/>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />, document.getElementById('main')
  );
});
