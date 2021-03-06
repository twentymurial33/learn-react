import React,{Component}from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return(
        <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src='../../Murial.jpg' style={{height:"300px",paddingtop: "5em"}} alt="" className="avatar-img"/>  
            <div className="banner-text">
                <h1>React Developer</h1>
                <hr/>
                <p> React| Cloud Computing [AWS & GCP]| JavaScript | Program Management|  NodeJS |</p>
                <div className="social-links">
                    {/*LinkedIn */}
                    <a href="https://www.linkedin.com/in/murial-anindo/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                      </a>
                   {/* Github */}
               <a href="https://github.com/twentymurial33" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
            </Cell>
              </Grid>
              </div>
        )
    }
}

export default Landing;