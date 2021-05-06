import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "./css/coursedisplay.css";
import Preloader from "./Preloader";
import Collapsible from "react-collapsible";
import API from "./services/API";
import axios from "axios";
export default function CourseDisplay(props) {
  const [userId, setUserId] = useState(localStorage.getItem("user_id"));
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [courseName, SetCourseName] = useState(props.coursename);
  const [quizPath, setQuizPath] = useState();
  const [courseContent, SetCourseContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profileAccess, setProfileAcces] = useState(
    localStorage.getItem("profileAccess") === "true"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
    // setLoading(false);
  }, []);

  let getData = async () => {
    await fetch(API.courseContent).then((response) => {
      response.json().then((settings) => {
        let coursetagFilter = settings.filter((value) => {
          return value.courseTag === courseName;
        });
        SetCourseContent(coursetagFilter[0]);
        if (coursetagFilter[0]) {
          setQuizPath(coursetagFilter[0].courseId);
          profileAccess &&
            fetch(API.userProfile + "/" + userId).then((response) => {
              response.json().then((profile) => {
                setQuizCompleted(
                  profile.completedCourseId.includes(
                    coursetagFilter[0].courseId
                  )
                );
              });
            });
        }
      });
    });
    setLoading(false);
  };
  function displayBulletPoints(point, index) {
    return (
      <li key={index} className="py-1" style={{ listStyle: "disc" }}>
        {point}
      </li>
    );
  }
  function displayPargraph(text) {
    return <p className="pt-1">{text}</p>;
  }
  function displayImage(image) {
    return (
      <div className="mx-auto d-none d-md-block" style={{}}>
        <div
          id="section-img"
          className="my-4 mx-auto"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url('../${image.path}')`,
            height: `${image.height}`,
            width: `${image.width}`,
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
            className="col-md-8 col-12"
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
            <a href={API.IFRAME.richinrix + iframe.titleCode}>
              {iframe.titleCode}
            </a>
          </iframe>
          <div className="col-md-4 col-11 mx-md-auto mx-1 my-auto">
            {iframe.description
              .split("\n")
              .map((line, index) => displayBulletPoints(line, index))}
          </div>
        </div>
      </div>
    );
  }
  function displayIframe(iframe) {
    return (
      <div className="text-center">
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
        <div id="code" className="col-md-4 col-sm-10 mx-sm-auto">
          <h5 className="text-center">{codeblock.header}</h5>
          <div className=" p-3 codeblock">
            {codeblock.code.split("\n").map((line) => displayLine(line))}
          </div>
        </div>
        <div
          id="codeDescription"
          className="col-md-8 col-sm-12 my-auto mx-md-auto ml-1"
        >
          <p>
            {codeblock.description
              ? codeblock.description
                  .split("\n")
                  .map((line, index) => displayBulletPoints(line, index))
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
          <div className=" p-3 codeblock" style={{ width: "90%" }}>
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
  function displayTitle() {
    return (
      <>
        <h2 className="text-light text-center my-3 course-title">
          <span id="leftBracket">&#123;</span>{" "}
          {courseContent && courseContent.title}{" "}
          <span id="rightBracket">&#125;</span>
        </h2>
        <div className="text-light text-center mt-4">
          <div id="description">{courseContent.description}</div>
        </div>
      </>
    );
  }
  function displayQuizBtn() {
    return (
      <div className="row ">
        <div className="col-md-4 col-lg-4" id="quizBtn">
          {!quizCompleted ? (
            <a
              className="btn btn-primary btn-block"
              href={
                "/quiz/" +
                courseContent.courseId +
                "/" +
                courseContent.courseTag
              }
            >
              Quiz
            </a>
          ) : (
            <a className="btn btn-success btn-block">Quiz Has Been Completed</a>
          )}
        </div>
      </div>
    );
  }
  function displaySectionBlocks(section) {
    switch (section.type) {
      case "normal":
        return displayNormalSection(section);
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
                        .map((point, index) =>
                          displayBulletPoints(point, index)
                        )
                    : ""}
                </div>
              );
            })}
            {/* image */}
            {section.image
              ? section.image.map((image) => displayImage(image))
              : ""}
            {/* sub heading and content */}
            {section.subHeading
              ? section.subHeading.map((subsection) => {
                  return (
                    <div className="my-3">
                      <h4>{subsection.header}</h4>
                      <div style={{ listStyleType: "none" }}>
                        {subsection.content
                          .split("\n")
                          .map((point, index) =>
                            displayBulletPoints(point, index)
                          )}
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

  return !courseContent ? (
    <Redirect to="/catalog" />
  ) : loading ? (
    <Preloader size={"big"} color={"green"} />
  ) : (
    <div id="course-display-wrapper" className="col-md-8 col-12  mb-5 mx-auto">
      {displayTitle()}
      <div className="">
        <div id="sectionBlocksWrapper" className="text-light">
          {courseContent.sectionBlocks &&
            courseContent.sectionBlocks.map((section) =>
              displaySectionBlocks(section)
            )}
        </div>
      </div>
      {profileAccess && displayQuizBtn()}
    </div>
  );
}
