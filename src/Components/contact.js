import React,{Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Murial Anindo</h2>
                        <hr/>
                        <img src='../../Murial.jpg' style={{height:"300px",paddingtop: "5em"}} alt="" className="avatar-img"/>  
                    </Cell>
                    <Cell col={6}>
                        <h2> Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style ={{fontSize:'30px',fontFamily:'Anton'}}>
                                      <i className="fa fa-phone-square" aria-hidden="true"/>
                                      (713) 962-0931
                                      </ListItemContent>
                                </ListItem>

                                <ListItem>
                                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                       mlomax@twu.edu
                                       </ListItemContent>
                                  </ListItem>
                                  
                                     <ListItem>
                                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                         <i className="fa fa-skype" aria-hidden="true"/>
                                           MySkypeID
                                         </ListItemContent>
                                    </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
        
    }
}

export default contact;






