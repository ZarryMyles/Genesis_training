import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
// import sampleData from "https://genesis-strapi-mongodb.herokuapp.com/course-contents";
import axios from "axios";
import "./css/coursedisplay.css";
export default function CourseDisplay(props) {
  const [courseName, SetCourseName] = useState(props.coursename);
  const [courseContent, SetCourseContent] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  let getData = async () => {
    await fetch(
      `https://genesis-strapi-mongodb.herokuapp.com/course-contents`
    ).then((response) => {
      response.json().then((settings) => {
        // instead of setting state you can use it any other way
        let coursetagFilter = settings.filter((value) => {
          return value.courseTag === courseName;
        });
        SetCourseContent(coursetagFilter[0]);
      });
    });
  };

  function displayBulletPoints(point) {
    return (
      <li className="py-1" style={{ listStyle: "disc" }}>
        {point}
      </li>
    );
  }
  function displayPargraph(text) {
    return <p className="pt-1">{text}</p>;
  }
  function displayImage(path) {
    return (
      <div className="mx-auto" style={{}}>
        <div
          id="section-img"
          className="my-4 mx-auto"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url('../${path}')`,
            height: "404px",
            width: "581px",
          }}
        ></div>
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
  function displayMiniIframe(iframe) {
    return (
      <div className="mx-auto">
        <h5>{iframe.header}</h5>
        <div className="row">
          <iframe
            className="col-8"
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
          <div className="col-4 my-auto">
            {iframe.description
              .split("\n")
              .map((line) => displayBulletPoints(line))}
          </div>
        </div>
      </div>
    );
  }
  function displayIframe(iframe) {
    return (
      <div className="mx-auto">
        <h5>{iframe.header}</h5>
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
      </div>
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
              ? codeblock.description
                  .split("\n")
                  .map((line) => displayBulletPoints(line))
              : ""}
          </p>
        </div>
      </div>
    );
  }
  function displayCodeBlock(codeblock) {
    return (
      <div className="m-2 my-3 py-3">
        <div id="code" className="mb-4">
          <h5 className="">{codeblock.header}</h5>
          <div className=" p-3 codeblock" style={{ width: codeblock.width }}>
            {codeblock.code.split("\n").map((line) => displayLine(line))}
          </div>
        </div>
        <div id="codeDescription" className="">
          <p className="ml-3">
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
          trigger={"> " + section.heading}
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
                <div className="bullet-points">
                  <h6>{subsection.header}</h6>
                  {subsection.content
                    ? subsection.content
                        .split("\n")
                        .map((point) => displayBulletPoints(point))
                    : ""}
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
            {section.miniIframe
              ? section.miniIframe.map((iframe) => displayMiniIframe(iframe))
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
        <span id="leftBracket">&#123;</span> {courseContent.title}{" "}
        <span id="rightBracket">&#125;</span>
      </h2>
      <div className="">
        <div className="text-light text-center mt-4">
          <div id="description">{courseContent.description}</div>
        </div>
        <div id="sectionBlocksWrapper" className="text-light">
          {courseContent.sectionBlocks
            ? courseContent.sectionBlocks.map((section) =>
                displaySectionBlocks(section)
              )
            : ""}
        </div>
      </div>
    </div>
  );
  // return "";
}
