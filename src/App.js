import React, { Component } from 'react';

import bgImg from './images/tile.jpg'

import TitleContainer from './components/TitleContainer'
class App extends Component {
  render() {
    return (
      <TitleContainer title='Home and Away' backgroundImg={bgImg}/>
    );
  }
}

export default App;
