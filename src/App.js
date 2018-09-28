import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import ButtonGrop from './ButtonGroup';
import {store} from './store';

class App extends Component {  
  render() {
      return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGrop key={2} technologies={["React", "Elm", "React-redux"]} />
    ];    
  }
}

export default App;
