import React from "react";

import Bar from "../../component/bar/Bar.component";
import ProjectCard from "../../component/projectcard/projectcard.component";
import ReReProjectPicture from "../../assets/img/ReRe.Project.Picture.png";
// import JavaScript20 from "../../assets/img/20_Vanilla_JavaScript_projects.png";
import FrontEnter from "../../assets/img/front-enter.png";

function Project() {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Bar BarName={"Project"} />
      <ProjectCard
        projectCardName={"Re-Re"}
        tagName={["React", "React Router", "Redux", "Tailwind CSS", "Firebase"]}
        introduction={
          "Re-Re is a note-taking application that can be used to record and review the learning process. In addition to supporting Markdown format editing notes, notes also have a visual Gantt chart timeline function, so that users can better understand their learning process."
        }
        img={ReReProjectPicture}
        Demo={"https://re-re-l34k.vercel.app"}
        Github={"https://github.com/iamvince24/Re-Re"}
      />
      <ProjectCard
        projectCardName={"Front-Enter"}
        tagName={["JavaScript", "SCSS"]}
        introduction={
          "Front-Enter is a resource-providing website that collects various resources that may be used in the process of learning front-end development. It aims to help users choose the most suitable resources by providing detailed course information and addressing their questions. Additionally, users can share their course experiences and provide feedback."
        }
        img={FrontEnter}
        Demo={"https://front-enter.vercel.app/"}
        Github={"https://github.com/iamvince24/Front-Enter"}
      />
    </div>
  );
}

export default Project;
