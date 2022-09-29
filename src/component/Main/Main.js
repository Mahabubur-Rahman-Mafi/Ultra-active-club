import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import logo from "../../images/logo.png";
import "./Main.css";

const Main = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div className="container ">
      <div className="row">
        <div className="col-12 col-md-7 col-lg-9 mt-5">
          <div className="d-flex align-items-center">
            <img src={logo} className="img-fluid logo-img" alt="" />
            <h2 className="ms-1 mt-1 fs-1">Let's Play</h2>
          </div>
          <h4 className="mt-2 fs-4">Select Today Game</h4>
          <div className=" activity-contianer mt-4">
            {activities.map((activity) => (
              //   console.log(activity);
              <Activity key={activity.id} activity={activity}></Activity>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-3 mt-5">
          <h1>information</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
