import React, { useEffect } from "react";
import Collapsible from "react-collapsible";
import courseContent from "../json/courseContent.json";

import "./css/coursedisplay.css";
export default function CourseDisplay(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // function divideSegments() {}
  function displayBulletPoints(point) {
    return <li className="py-1">{point}</li>;
  }
  function displayPargraph(text) {
    return <p className="pt-1">{text}</p>;
  }
  function displayImage(path) {
    return (
      <div
        className="mx-auto"
        style={{
          height: "300px",
          width: "400px",
        }}
      >
        <div
          id="section-img"
          className="my-4"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url('${path}')`,
            maxWidth: "100%",
            minHeight: "100%",
            border: "1px solid white",
          }}
        >
          <p>{path}</p>
        </div>
        {/* <img
        src={`url('${section.imagePath[0]}')`}
        alt={section.imagePath[0]}
        srcset=""
      /> */}
      </div>
    );
  }
  function displayLine(line) {
    return (
      <div className="">
        {line}
        <br />
      </div>
    );
  }
  function displayIframe(iframe) {
    return (
      <iframe
        height={iframe.height}
        style={{ width: iframe.width, margin: "auto" }}
        scrolling="no"
        title="eYgRwNb"
        src={iframe.src}
        frameborder="no"
        loading="lazy"
        allowtransparency="true"
        allowfullscreen="true"
      >
        See the Pen{" "}
        <a href={"https://codepen.io/richinrix/pen/" + iframe.titleCode}>
          {iframe.titleCode}
        </a>
      </iframe>
    );
  }
  function displayMiniCodeBlock(codeblock) {
    return (
      <div className="row m-2 mt-3 py-3">
        <div id="code" className="col-4">
          <h5 className="text-center">{codeblock.header}</h5>
          <div className=" p-3 codeblock">
            {codeblock.code.split("\n").map((line) => displayLine(line))}
          </div>
        </div>
        <div id="codeDescription" className="col-8 my-auto mx-auto">
          <p>
            {codeblock.description
              .split("\n")
              .map((line) => displayBulletPoints(line))}
          </p>
        </div>
      </div>
    );
  }
  function displayCodeBlock(codeblock) {
    return (
      <div className="m-2 mt-3 py-3">
        <div id="code" className="">
          <h5 className="">{codeblock.header}</h5>
          <div className=" p-3 codeblock">
            {codeblock.code.split("\n").map((line) => displayLine(line))}
          </div>
        </div>
        <div id="codeDescription" className="">
          <p>
            {codeblock.description
              ? codeblock.description
                  .split("\n")
                  .map((line) => displayLine(line))
              : ""}
          </p>
        </div>
      </div>
    );
  }
  function displaySectionBlocks(section) {
    let blocktype;
    switch (section.type) {
      case "normal":
        return displayNormalSection(section);
      case " ":

      default:
        return displayNormalSection(section);
    }
  }

  function displayNormalSection(section) {
    return (
      <div id={section.position} className="sectionBlocks  ">
        <Collapsible
          trigger={section.heading}
          classParentString="collapsible-section"
          triggerClassName="collapsible-trigger"
          triggerOpenedClassName="collapsible-trigger-opened"
        >
          <div className="font-montserrat">
            {section.description
              ? section.description
                  .split("\n")
                  .map((line) => displayPargraph(line))
              : ""}
            {/* first set of bullet points */}
            {section.bulletPoints.map((subsection) => {
              return (
                <div>
                  <h6>{subsection.header}</h6>
                  {subsection.content
                    .split("\n")
                    .map((point) => displayBulletPoints(point))}
                </div>
              );
            })}
            {/* image */}
            {section.imagePath ? displayImage(section.imagePath[0]) : ""}
            {/* sub heading and content */}
            {section.subHeading
              ? section.subHeading.map((subsection) => {
                  return (
                    <div className="my-3">
                      <h4>{subsection.header}</h4>
                      <div style={{ listStyleType: "none" }}>
                        {subsection.content
                          .split("\n")
                          .map((point) => displayBulletPoints(point))}
                      </div>
                    </div>
                  );
                })
              : ""}
            {section.moreData
              ? section.moreData.map((line) => displayPargraph(line))
              : ""}
            {/* code blocks and iframe */}
            {section.miniCodeblock
              ? section.miniCodeblock.map((miniblock) =>
                  displayMiniCodeBlock(miniblock)
                )
              : ""}
            {section.codeBlock
              ? section.codeBlock.map((codeblock) =>
                  displayCodeBlock(codeblock)
                )
              : ""}
            {section.iframe
              ? section.iframe.map((iframe) => displayIframe(iframe))
              : ""}
          </div>
        </Collapsible>
      </div>
    );
  }
  return (
    <div id="course-display-wrapper" className="col-8  mb-5 mx-auto">
      <h2 className="text-light text-center my-3 course-title">
        {courseContent[0].title}
      </h2>
      <div className="">
        <div className="">
          <div id="description">{courseContent[0].description}</div>
          <div id="requirements">
            <h3 className="color-green ">Requirements</h3>
            <ul className="text-light">
              {courseContent[0].requirements
                .split("\n")
                .map((req) => displayBulletPoints(req))}
            </ul>
          </div>
        </div>
        <div id="sectionBlocksWrapper" className="text-light">
          {courseContent[0].sectionBlocks.map((section) =>
            displaySectionBlocks(section)
          )}
        </div>
      </div>
    </div>
  );
}