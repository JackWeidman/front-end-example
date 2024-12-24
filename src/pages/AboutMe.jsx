import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="mt-4">
          This is the about me page where you can add information about
          yourself.
        </p>
      </div>
    </>
  );
};

export default About;
