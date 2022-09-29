import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import logo from "../../images/logo.png";
import Information from "../Information/Information";
import "./Main.css";

const Main = () => {
  const [activities, setActivities] = useState([]);
  
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const [playing, setPlaying] = useState([]);
  const addToTime = (act) => {
    let newPlay = [...playing, act];
    setPlaying(newPlay);
  };

  return (
    <div className="container main-body">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-9 mt-5">
          <div className="d-flex align-items-center">
            <img src={logo} className="img-fluid logo-img" alt="" />
            <h2 className="ms-1 mt-1 fs-1">Let's Play</h2>
          </div>
          <h4 className="mt-2 fs-4">Select Today Game</h4>
          <div className=" activity-contianer mt-4">
            {activities.map((activity) => (
              <Activity
                key={activity.id}
                addToTime={addToTime}
                activity={activity}
              ></Activity>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3  bg-info information-container">
          <Information playing={playing}></Information>
        </div>
      </div>
    </div>
  );
};

export default Main;
