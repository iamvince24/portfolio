import React, { Fragment } from "react";

function ProjectCard({
  projectCardName,
  tagName,
  introduction,
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
    <Fragment>
      <div className="Project">
        <div className="projectCard" key={projectCardName}>
          <img src={img} className="projectCardImg" alt="projectCardImg" />
          <div className="projectCardContent">
            <div className="projectCardName">{projectCardName}</div>
            <div className="projectCardLinksList">
              <a
                href={Demo}
                target="_blank"
                rel="noreferrer"
                className="projectCardLinks"
              >
                Demo
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a
                href={Github}
                target="_blank"
                rel="noreferrer"
                className="projectCardLinks"
              >
                Github
              </a>
            </div>
            <div className="tagContainer">{item}</div>
            <p className="projectCardIntroduciton">{introduction}</p>
          </div>
        </div>
        <div className="projectCardUnderline"></div>
      </div>
    </Fragment>
  );
}

export default ProjectCard;
