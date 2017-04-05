import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Header = () => {
    return (
        <header className="shadow bg">
            <div className="centerme headx">
                <h2 className="title white namie">Analie Balaoing Moreno</h2>
                <p className="subtitle white">Frontend Web Developer</p>
            </div>
            <div id="profimg">
                <img id= "prof" src="/images/anlie.jpg" alt="Location" />
            </div> 
            <div id="descr">
                <div id="iconHeader">
                    <Button color='facebook' href="https://web.facebook.com/analiemoreno">
                        <Icon name='facebook' /> Facebook
                    </Button>
                    <Button color='twitter' href="https://twitter.com/Haaalieee">
                        <Icon name='twitter' /> Twitter
                    </Button>
                    <Button color='google plus'>
                        <Icon name='google plus' href="https://morenoanalie14@gmail.com" /> Google Plus
                    </Button>
                </div>
                <div id="descr_content">
                    <p>
                        Have an excellent technical skills, communication skills, and goal-focused individual. I am motivated and enthusiastic by new challenges and tasks and take excellent approach to achieve success in all projects. I like to work in a complex projects which have scope for learning and challenge. I have a keen interest in technology, web development, designing and animations. As someone who takes responsibility for my personal development, I continuously evaluate and upgrade my skills so that I stay at the cutting edge of software development. Right now I'm looking for a position that implements the expertise and experience as a computer engineering student to develop complex project with efficiency and quality.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
