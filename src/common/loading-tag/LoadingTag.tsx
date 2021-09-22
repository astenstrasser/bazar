import React from "react";
import "./LoadingTag.css";

function LoadingTag(props: { isLoading: boolean }): React.ReactElement {
  return (
    <div>
      {props.isLoading && (
        <div className="loading-container">
          <div className="spinner">
            <div className="petal" id="p1" />
            <div className="petal" id="p2" />
            <div className="petal" id="p3" />
            <div className="petal" id="p4" />
          </div>
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
}

export default LoadingTag;
