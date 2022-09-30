import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ToasT = () => {
    const notify = () =>
        toast("Wow so easy!");
    return (
      <div>
        <button
          className="btn btn-outline-light w-100 fs-5 activity-btn mt-5"
          onClick={() => notify()}
        >
          Playing Completed
        </button>
        <ToastContainer />
      </div>
    );
};

export default ToasT;