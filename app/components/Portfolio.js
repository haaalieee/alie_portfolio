import React from 'react';
import {Container, Grid, Image, Card, Icon,  Reveal, Button } from 'semantic-ui-react';
import {Link} from 'react-router';

const extra = (
    <div className='ui two buttons'>
        <Button primary>Visit</Button>
    </div>
)

const Portfolio = () => (
  <div id="skills">
    <Container>  
        <Grid columns={3}>
            <Grid.Column>
                <Card
                    image={ 
                        <Reveal animated='move up'>
                            <Reveal.Content visible>
                            <Image src='./images/1.png' size='large' />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                            <Image src='./images/star.jpg' size='large' />
                            </Reveal.Content>
                        </Reveal>}
                    header='Starlight Studio Website'
                    meta='Role: UI and FrontEnd Developer'
                    description='Developed using Jade, CSS, ExpressJS and NodeJS. It is a website that offers physical training and let users send inquiries.'
                    extra={    
                        <div className='ui two buttons'>
                            <a  className="fullWidth" href='http://coen3463-m2t16.herokuapp.com'>
                                <Button primary className="inh">Visit</Button>
                            </a>
                        </div>}
                />    
            </Grid.Column>
            <Grid.Column>
                <Card
                    image={
                        <Reveal animated='move up'>
                            <Reveal.Content visible>
                            <Image src='./images/2.png' size='large' />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                            <Image src='./images/bulletin.jpg' size='large' />
                            </Reveal.Content>
                        </Reveal>}
                    header='CpE Bulletin'
                    meta='Role: UI Developer'
                    description='Developed using ReactJS (FrontEnd), ExpressJS (BackEnd) and Material-UI for UI design with chat room capabalities.'
                    extra= 
                        {<div className='ui two buttons'>
                            <a  className="fullWidth" href='https://pup-cpe-bulletin.herokuapp.com/login'>
                                <Button primary className="inh">Visit</Button>
                            </a>
                        </div>}
                />    
            </Grid.Column>
            <Grid.Column>
                <Card
                    image={
                        <Reveal animated='move up'>
                            <Reveal.Content visible>
                            <Image src='./images/3.png' size='large' />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                            <Image src='./images/gates.jpg' size='large' />
                            </Reveal.Content>
                        </Reveal>}
                    header='Books of Gates'
                    meta='Role: UI and FrontEnd Developer'
                    description='Developed using Jade, CSS and ExpressJS. It offers basic CRUD operations.'
                    extra={
                        <div className='ui two buttons'>
                            <a  className="fullWidth" href='http://coen3463-m3t16.herokuapp.com'>
                                <Button primary className="inh">Visit</Button>
                            </a>
                        </div>}
                />    
            </Grid.Column>
        </Grid>
        <Grid columns={3}>
            <Grid.Column>
                <Card
                    image={ 
                        <Reveal animated='move up'>
                            <Reveal.Content visible>
                            <Image src='./images/4.png' size='large' />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                            <Image src='./images/cores.jpg' size='large' />
                            </Reveal.Content>
                        </Reveal>}
                    header='CoRES 2016'
                    meta='Role: UI and FrontEnd Developer'
                    description='Developed using HTML, Javascript and Bootstrap CSS. It offers list of seminars and events for CoRES 2016.'
                    extra={
                        <div className='ui two buttons'>
                            <a  className="fullWidth" href='https://cores2016.herokuapp.com/'>
                                <Button primary className="inh">Visit</Button>
                            </a>
                        </div>}
                />    
            </Grid.Column>
            <Grid.Column>
                <Card
                    image={
                        <Reveal animated='move up'>
                            <Reveal.Content visible>
                            <Image src='./images/5.png' size='large' />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                            <Image src='./images/gates2.jpg' size='large' />
                            </Reveal.Content>
                        </Reveal>}
                    header='Books of Gates 2.0'
                    meta='Role: UI Developer'
                    description='It uses Express Restify for single page application.'
                    extra={
                        <div className='ui two buttons'>
                            <a  className="fullWidth" href='http://coen3463-m4t16.herokuapp.com/'>
                                <Button primary className="inh">Visit</Button>
                            </a>
                        </div>}
                />    
            </Grid.Column>
            <Grid.Column>
                <Card
                    image={
                        <Reveal animated='move up'>
                            <Reveal.Content visible>
                            <Image src='./images/6.png' size='large' />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                            <Image src='./images/todo.jpg' size='large' />
                            </Reveal.Content>
                        </Reveal>}
                    header='To Do App'
                    meta='Role: UI Developer'
                    description='Developed using ReactJS and ExpressJS with API technology for single page application'
                    extra={
                        <div className='ui two buttons'>
                            <a  className="fullWidth" href='http://coen3463-todoapp-t17.herokuapp.com'>
                                <Button primary className="inh">Visit</Button>
                            </a>
                        </div>}
                />    
            </Grid.Column>
        </Grid>
    </Container>
  </div>
)

export default Portfolio;
