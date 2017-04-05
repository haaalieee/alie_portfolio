import React from 'react';

const Timeline = () => {
    console.log(" ");
    return (
    <div>
        <section id="cd-timeline" className="cd-container">
            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture">
                </div>

                <div className="cd-timeline-content">
                    <h2 className="white">3DMe Philippines Inc. (Web Developer Intern)</h2>
                    <h4>Tasks</h4>
                    <p> Developing their forum page using Yii2 MVC Framework. Applying knowledge of PHP, HTML, CSS, OOP and Javascript/ Jquery. Designing the page to be fit and view-able to any mobile devices using Bootstrap Framework. Communicating with our Project Manager to clarify what they     want. Troubleshot and solved web problems. Writing up technical manuals. Deploying the project to a scalable linux server. Helping new intern on web development issues.
                    </p>
                    <span className="cd-date black">April - June 2016</span>
                </div> 
            </div> 

            <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-movie">
                </div> 

                <div className="cd-timeline-content">
                    <h2 className="white">Remote Staff Company (Web Developer Intern) </h2>
                    <h4>Tasks</h4>
                    <p> Worked with other interns to develop company website. Awareness of the Web Development industry, and new technologies. Assigned to design their company profile using bootstrap framework. Assigned for software quality assurance task in the project development. Troubleshot and solved web problems. Communicating with the Web Dev. Team for improvements </p>
                    <span className="cd-date black">April - June 2015</span>
                </div> 
            </div> 
        </section> 
    </div>
    );
};

export default Timeline;