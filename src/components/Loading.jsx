import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-800 text-xl">
      <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
