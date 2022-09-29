import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import image from "../../images/pro.jpg";
import "./Information.css";

const Information = () => {
  return (
    <div className="info-item text-white">
      <h1 className="mt-5 text-center"> Information</h1>
      {/* about me section  */}
      <div>
        <div className="about-me mt-4">
          <div>
            <img src={image} className="my-image image-fluid" alt=""></img>
          </div>
          <div className="text-light ms-3">
            <h2 className="fs-4 mb-0">M. Rahman</h2>
            <div className="d-flex align-items-center m-0 ">
              <FontAwesomeIcon icon={faMapLocationDot}></FontAwesomeIcon>
              <p className="fs-6 ms-2 m-0">Sylhet, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
      {/* ...---... */}

      {/* button section */}
      <div className="mt-5">
        <h3>Add a break</h3>
        <hr className="border border-2"></hr>
        <div className="d-flex justify-content-between mt-2  p-2 rounded-3">
          <button className="btn p-2 fs-6 fw-semibold rounded-3 text-light  btn-outline-warning border border-2">
            10
          </button>
          <button className="btn p-2 fs-6 fw-semibold rounded-3 text-light  btn-outline-warning border border-2">
            15
          </button>
          <button className="btn p-2 fs-6 fw-semibold rounded-3 text-light  btn-outline-warning border border-2">
            20
          </button>
          <button className="btn p-2 fs-6 fw-semibold rounded-3 text-light  btn-outline-warning border border-2">
            25
          </button>
          <button className="btn p-2 fs-6 fw-semibold rounded-3 text-light  btn-outline-warning border border-2">
            30
          </button>
        </div>
      </div>
      {/* ...---... */}

      {/* play time details  */}
      <div className="mt-5">
        <h3>Playing Time</h3>
        <hr className="border border-2"></hr>
        <h5>Play Time: </h5>
        <h5>Break Time: </h5>
      </div>
      {/* --...-- */}

      <button className="btn btn-outline-light w-100 fs-5 activity-btn mt-5">Playing Completed</button>
    </div>
  );
};

export default Information;
