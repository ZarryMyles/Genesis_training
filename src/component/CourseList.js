import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CourseDisplay from "./CourseDisplay";

export default function CourseLIst() {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    await fetch(`/json/course.json`).then((response) => {
      response.json().then((list) => {
        setCourseList(list);
      });
    });
  };
  function coursePreview(course) {
    let coursePath = course.link;
    let image_path = course.preview_img;
    return (
      <div className="course  m-5">
        <Link
          to={coursePath}
          onClick={coursedisplay}
          style={{ textDecoration: "none" }}
        >
          <div className="preview-img-container overflow-hidden">
            <div
              id="preview-img"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url('${image_path}')`,
                minWidth: "100%",
                minHeight: "100%",
              }}
            ></div>
          </div>
          <h6 className="course-list-title text-center py-1">{course.name}</h6>
        </Link>
      </div>
    );
  }
  return (
    <div className="mx-auto">
      <div
        id="CourseView"
        className="p-3 mx d-flex  flex-md-wrap justify-content-center"
      >
        {courseList.map((course) => coursePreview(course))}
      </div>
    </div>
  );
}
const coursedisplay = () => <CourseDisplay />;
