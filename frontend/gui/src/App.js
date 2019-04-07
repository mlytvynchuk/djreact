import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import BaseRouter from './routes'
import OurLayout from './containers/Layout'
import 'antd/dist/antd.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <OurLayout>
            <BaseRouter/>
          </OurLayout>


        </BrowserRouter>
      </div>
    );
  }
}

export default App;
