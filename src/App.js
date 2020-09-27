import React, { Component } from 'react';
import './App.css';
import {Header,Navigation,Layout,Drawer}from 'react-mdl';
import Main from './Components/main';
import {Link} from 'react-router-dom';


class App extends Component{
  render(){
    return(
      <div className="Murial's-portfolio">
        <Layout>
          <Header className="header-color"title={<Link style={{textDecoration:'none',color:'orange'}} to='/'> MURIAL'S PORTFOLIO</Link>} scroll>
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contact</Link>
          </Navigation>
            </Header> 
            <Drawer title ={<Link style={{textDecoration:'none',color:'black'}} to="/">MURIAL'S PORTFOLIO</Link>}>
              <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contacts">Contact</Link>
              </Navigation>
            </Drawer>
      </Layout>
      <Main/>
      </div>

    )

    

  }
}


export default App;
