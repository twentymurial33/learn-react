import React, { Component } from 'react';
import './App.css';
import {Header,Navigation,}from 'react-mdl';
import Main from './Components/main';
import {Link} from 'react-router-dom'


class App extends Component{
  render(){
    return(
      <div className="Murial's-portfolio">
        
          <Header className="header-color" to="/">
          <Navigation>

          </Navigation>
            </Header> 
      
      </div>

    )

    

  }
}


export default App;
