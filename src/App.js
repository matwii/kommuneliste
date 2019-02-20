import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import './App.css';
import moment from 'moment';
import 'moment/locale/nb'

//Sets default language of the moment package
moment.locale('nb');

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default App;
