import React from "react";
import { Link } from "react-router-dom";
// reading json
import courseData from "../json/course.json";
import CourseDisplay from "./CourseDisplay";
// import img from "../../public/images/course_preview_img/html-preview.jpg";
export default function CourseLIst() {
  function coursePreview(course) {
    let coursePath = course.link;
    let image_path = course.preview_img;
    return (
      <div className="course  m-2">
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
                maxWidth: "100%",
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
        className="p-3 mx-5 d-flex  flex-md-wrap justify-content-center"
      >
        {courseData.map((course) => coursePreview(course))}
      </div>
    </div>
  );
}
const coursedisplay = () => <CourseDisplay courseId={1} />;
