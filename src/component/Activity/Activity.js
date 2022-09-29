import React from "react";
import './Activity.css'

const Activity = (props) => {
  console.log(props.activity);
  const { name, img, time , about} = props.activity;
  return (
    <div className="activity-card">
      <div class="card ">
        <img src={img} className="card-img-top activity-img" alt="" />
        <div class="card-body">
                  <h3 class="card-text">{name}</h3>
                  <p>{about}</p>
          <h6 class="card-text">Play Time: {time} minutes</h6>
          <button className="btn btn-outline-primary w-100  activity-btn">
            Want to Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
