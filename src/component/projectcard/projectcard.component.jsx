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
  const item = tagArray.map((name) => <div className="tagName">{name}</div>);

  return (
    <div className="projectCard" key={projectCardName}>
      <div className="projectCardContent">
        <div className="">
          <p className="projectCardName">{projectCardName}</p>
          <div className="projectCardLinksList">
            <a
              href={Demo}
              target="_blank"
              rel="noreferrer"
              className="projectCardLinks"
            >
              Demo
            </a>
            |&nbsp;
            <a
              href={Github}
              target="_blank"
              rel="noreferrer"
              className="projectCardLinks"
            >
              Github
            </a>
          </div>
          <p className="projectCardIntroduciton">{introduciton}</p>
        </div>
        <div className="tagContainer">{item}</div>
      </div>
      <img src={img} className="projectCardImg" alt="111" />
    </div>
  );
}

export default ProjectCard;
