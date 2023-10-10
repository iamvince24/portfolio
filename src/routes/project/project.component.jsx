import React from "react";

import Bar from "../bar/bar.component";
import ProjectCard from "../../component/projectcard/projectcard.component";
import A from "../../img/rere.png";

function Project() {
  return (
    <div>
      <Bar barName={"Project"} barClassName={[]} />
      <ProjectCard
        projectCardName={"視覺化學習過程的筆記應用程式 ｜ Re-Re"}
        tagName={[
          "React",
          "React Router",
          "Redux",
          "Tailwind CSS",
          "Firebase",
          "Javascript",
        ]}
        introduciton={
          "Re-Re 是一款可以用來記錄以及回顧學習過程的筆記應用程式。除了支援 Markdown 格式筆記，它還具備了甘特圖的時間軸功能，可以更好地了解自己的學習過程。"
        }
        img={A}
        Demo={"https://re-re-l34k.vercel.app"}
        Github={"https://github.com/iamvince24/Re-Re"}
      />
    </div>
  );
}

export default Project;
