import React from "react";

import Bar from "../bar/bar.component";
import ProjectCard from "../../component/projectcard/projectcard.component";

function Project(){
    return(
        <div>
            <Bar 
                barName={'Project'} 
                barClassName={['All', 'Javascript', 'React', 'CSS']}
            />
            <ProjectCard 
                projectCardName={'Personal Website'} 
                tagName={['All', 'Javascript', 'React', 'CSS']}
            />
        </div>
    )
}

export default Project;