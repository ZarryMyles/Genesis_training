import React from "react";

export default function CourseSidebar() {
  return (
    <div className=" col-2 d-none d-md-block">
      <div>
        <div className="siderbar">
          <h3 className="text-white text-center "> Navigation </h3>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link " href="#requirements-section">
                Requirements
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link " href="#Front-Back-end-section">
                Front End and Back End
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#learning-path-section">
                Learning Path
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#web-working">
                How the Web Works
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
