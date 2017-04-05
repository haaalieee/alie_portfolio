import React from 'react';

const Education = () => {
    return (
    <div>
        <section id="cd-timeline" className="cd-container">
            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture">
                </div>

                <div className="cd-timeline-content">
                    <h2 className="white">Polytechnic University of the Philippines</h2>
                    <h4>Bachelor of Science in Computer Engineering</h4>
                    <span className="cd-date black">2012-2017</span>
                </div> 
            </div> 

            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-movie">
                </div> 

                <div className="cd-timeline-content">
                    <h2 className="white">Taguig Science High School</h2>
                    <span className="cd-date black">2008 - 2012</span>
                </div> 
            </div> 
        </section> 
    </div>
    );
};

export default Education;