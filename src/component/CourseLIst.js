import React from "react";
import { Link } from "react-router-dom";
// reading json
import courseData from "../json/course.json";
// import img from "../../public/images/course_preview_img/html-preview.jpg";
export default function CourseLIst() {
  function coursePreview(course) {
    let image_path = course.preview_img;

    console.log(image_path);

    return (
      <div className="course  m-2">
        <Link to="/catalog/story1">
          {" "}
          <div className="preview-img-container overflow-hidden">
            {" "}
            <div
              id="preview-img"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url('${image_path}')`,
                maxWidth: "100%",
                minHeight: "100%",
                // borderRadius: "15px",
              }}
            ></div>
          </div>
          <h6 className="course-title text-center py-1">{course.name}</h6>
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
