import React,{Component }from 'react';
import {Grid,Cell}from 'react-mdl';
// import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell className="resume" col={12}>
                        <div style={{textAlign:"center"}}>
                        <img src='../../Murial.jpg' style={{height:"300px",paddingtop: "5em"}} alt="" className="avatar-img"/>  
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Murial Anindo</h2>
                        <h4 style={{color: 'grey'}}>React Developer</h4>
                         <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                         <p>A proven record of leading complex and diverse technology programs and projects that drive organizational transformations and growth.Solid understanding and experience of Cloud Technologies and architectures with achieved proven leading AWS certifications.Experience with all aspects of software development and product delivery. Experience in leveraging technical, business and financial acumen to communicate with leadership and influence organizational transformations.</p>
                          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                          <h5>Address</h5>
                         <p>11410 Reston Station Blvd</p>
                        <h5>Phone</h5>
                        <p>713-962-0931</p>
                        <h5>Email</h5>
                        <p>mlomax@twu.edu</p>
                         <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                
                       
            </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;