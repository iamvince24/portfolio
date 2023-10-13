import React from "react";

import Bar from "../../component/bar/Bar.component";
import ReReProjectPicture from "../../assets/img/ReRe.Project.Picture.png";

function Project() {
  return (
    <div>
      <Bar barName={"Project"} BarClassNameList={[]} />
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
          "Re-Re 是一款可以用來記錄以及回顧學習過程的筆記應用程式。除了支援 Markdown 格式編輯筆記，筆記還具備了視覺化的甘特圖時間軸功能，讓使用者可以更好地了解自己的學習過程。"
        }
        img={ReReProjectPicture}
        Demo={"https://re-re-l34k.vercel.app"}
        Github={"https://github.com/iamvince24/Re-Re"}
      />
    </div>
  );
}

export default Project;
