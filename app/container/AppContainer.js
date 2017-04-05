import React, { PropTypes } from 'react';
import { Icon } from 'semantic-ui-react';
import Timeline from '../components/Timeline';
import Headline from '../components/Headline';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Portfolio from '../components/Portfolio';

class AppContainer extends React.Component {
    render (){
        return (
            <div>
                <div id="first">
                    <Headline name="Experience"/>
                </div>
                    <Timeline />
                <div id="second">
                    <Headline name="Skills"/>
                </div>
                    <Skills />
                <div id="second">
                    <Headline name="Education"/>
                </div>
                    <Education />
                <div id="second">
                    <Headline name="Portfolio"/>
                </div>
                    <Portfolio />
            </div>
        )
    };

};

export default AppContainer ;