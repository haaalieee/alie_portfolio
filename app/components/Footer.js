import React from 'react';
import {Container, Grid, Image, Label, Segment, Progress, List } from 'semantic-ui-react';



const Footer = () => {
    return (
      <div className="footerx">
            <Container>  
                <Grid columns={3}>
                    <Grid.Column className="border_right">
                          <List className="footWidth">
                            <h1 className="footh1">Contact Me:</h1>
                            <List.Item>
                                <List.Icon name='users' color='grey' />
                                <List.Content color='grey'>Analie Moreno</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='marker'  color='grey' />
                                <List.Content color='grey'>Manila, PH</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='mail' color='grey'/>
                                <List.Content color='grey'>
                                    <a href='mailto:morenoanalie14@gmail.com'>morenoanalie14@gmail.com</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='linkify'  color='grey' />
                                <List.Content color='grey'>
                                    <a href='https://github.com/haaalieee'>github.com/haaalieee</a>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column className="border_right">
                          <List className="footWidth">
                            <h1 className="footh1">More:</h1>
                            <List.Item>
                                <List.Icon name='comment'  color='grey' />
                                <List.Content color='grey'className="textLeft">""Everyone needs a coach. It doesn't matter whether you're a basketball player, a tennis player, a gymnast, or a bridge player."</List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                     <Grid.Column>
                          <List className="footWidth">
                            <h1 className="footh1">All Rights Reserved</h1>
                            <List.Item>
                                <List.Icon name='users'  color='grey' />
                                <List.Content color='grey'>2017</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='mouse pointer'  color='grey'/>
                                <List.Content color='grey'>ReactJS</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='mail'  color='grey' />
                                <List.Content color='grey'>
                                    <a href='mailto:@herokuapp.com'>@herokuapp.com</a>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid>
            </Container>
      </div>
    );
};

export default Footer;