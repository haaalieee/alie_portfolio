import React from 'react';
import {Container, Grid, Image, Label, Segment, Progress } from 'semantic-ui-react';

const Skills = () => (
  <div id="skills">
    <Container>  
        <Grid columns={2}>
            <Grid.Column>
            <Segment raised>
                <Label as='a' color='red' ribbon>Technical Skills</Label>
                  <div className="prog">
                    <Progress percent={90} active>
                        HTML 
                    </Progress>
                    <Progress percent={90} active>
                        CSS
                    </Progress>
                    <Progress percent={60} active>
                        JavaScript
                    </Progress>
                    <Progress percent={50} active>
                        PHP
                    </Progress>
                    <Progress percent={50} active>
                        SQL
                    </Progress>
                  </div>
            </Segment>
            </Grid.Column>

            <Grid.Column>
                <Segment>
                    <Label as='a' color='orange' ribbon='right'>Personal Skills</Label>
                    <div className="prog">
                        <Progress percent={100} active>
                            Commited 
                        </Progress>
                        <Progress percent={90} active>
                            Punctual
                        </Progress>
                        <Progress percent={80} active>
                            Leadership
                        </Progress>
                        <Progress percent={70} active>
                            Communicative
                        </Progress>
                        <Progress percent={80} active>
                            Analytical Skill
                        </Progress>
                    </div>
                </Segment>
            </Grid.Column>
        </Grid>
    </Container>
  </div>
)

export default Skills;
