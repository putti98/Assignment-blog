import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainComp from './components/main.component';
import FooterComp from './components/footer.component';
import HeaderComp from './components/header.component';
import './index.css';

class MainApp extends Component{
  render(){
    return <div className="container">
            <HeaderComp/>
            <MainComp/>
            <FooterComp/>
          </div>
  }
}
ReactDOM.render(<MainApp/>,  document.getElementById('root') );
