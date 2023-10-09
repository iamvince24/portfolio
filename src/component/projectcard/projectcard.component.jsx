import React from "react";

import './projectcard.component.style.scss'

function ProjectCard({projectCardName, tagName}){
    const tagArray = tagName;
    const item = tagArray.map((name) => <div className="tagName">{name}</div>)

    return(
        <div className="projectCard" key={projectCardName}>
            <div className="projectCardContent">
                <p className="projectCardName">{projectCardName}</p>
                <p className="projectCardIntroduciton">
                But, first, what are cold and warm lambdas? A cold lambda is a lambda that hasn’t been loaded into the execution environment, this is typically because it has either not been invoked before or hasn’t been invoked for a significant period. This means when we go to invoke a cold lambda, AWS needs to set up the resources and infrastructure required to execute the function and it’s this setup that causes an increase in latency and response time.
                </p>
                <div className="tagContainer">
                    {item}
                </div>
            </div>
            <div className="projectCardImg">
                
            </div>
        </div>
    )
}

export default ProjectCard;