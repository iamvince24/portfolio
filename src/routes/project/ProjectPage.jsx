import React from "react";

import Bar from "../../component/bar/Bar.component";
import ProjectCard from "../../component/projectcard/projectcard.component";
import ReReProjectPicture from "../../assets/img/ReRe.Project.Picture.png";
import JavaScript20 from "../../assets/img/20_Vanilla_JavaScript_projects.png";

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
        projectCardName={"JavaScript 20"}
        tagName={["JavaScript", "SCSS"]}
        introduction={
          "These projects are some exercises for JavaScript Web Projects: 20 Projects to Build Your Portfolio."
        }
        img={JavaScript20}
        Demo={"https://github.com/iamvince24/JavaScript-20"}
        Github={"https://github.com/iamvince24/JavaScript-20"}
      />
    </div>
  );
}

export default Project;
