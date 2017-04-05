import React from 'react';
import { Divider } from 'semantic-ui-react';

const Headline = (props) => {
    return (
       <div className="centerme widthme">
            <p id="propsName">{props.name}</p>
       </div>
    );
};

export default Headline;
