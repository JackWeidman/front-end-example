import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="text-5xl">404 Not Found</div>
      <div className="mt-4">
        <Button>
          <Link to="/">Take me home, country roads</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
