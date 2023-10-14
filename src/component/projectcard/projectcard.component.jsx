import React from "react";

function ProjectCard({
  projectCardName,
  tagName,
  introduciton,
  img,
  Demo,
  Github,
}) {
  const tagArray = tagName;
  const item = tagArray.map((name, id) => (
    <div className="tagName" key={id}>
      {name}
    </div>
  ));

  return (
    <div className="projectCard" key={projectCardName}>
      <div className="projectCardContent">
        <div className="">
          <div className="projectCardName">{projectCardName}</div>
          <div className="projectCardLinksList">
            <a
              href={Demo}
              target="_blank"
              rel="noreferrer"
              className="projectCardLinks"
            >
              Demo |&nbsp;
            </a>

            <a
              href={Github}
              target="_blank"
              rel="noreferrer"
              className="projectCardLinks"
            >
              Github
            </a>
            <div className="tagContainer">{item}</div>
          </div>
          <p className="projectCardIntroduciton">{introduciton}</p>
        </div>
      </div>
      <img src={img} className="projectCardImg" alt="projectCardImg" />
    </div>
  );
}

export default ProjectCard;
