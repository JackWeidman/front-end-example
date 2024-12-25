import React from "react";
import Header from "../components/Header";
import LinkedInCard from "../components/LinkedInCard";
const About = () => {
  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold text-center">About Me</h1>
      <div className=" flex flex-col gap-4 container mx-auto p-4 rounded-lg shadow-lg mt-6 max-w-screen-lg sm:flex-row">
        {/* need to figure out how to center vertically */}
        <p className="mt-4 text-center">
          Hello, my name is John Weidman, but I go by Jack! I am a web developer
          and I love to build things with React. I graduated from Sam Houston
          State University with a BFA in Studio Art, and my diverse work
          experience has shaped me into a strong problem solver. Over the past
          two years, I've been learning software development, with a particular
          focus on web development for the last year. Outside of my professional
          life, I am happily married and about to become a dad, and I share my
          home with two cats. In my free time, I love to read, with a particular
          passion for classic literature, fantasy, and sci-fi. I also enjoy
          learning about history, astro-physics, and philosophy.
        </p>
        <LinkedInCard />
      </div>
    </>
  );
};

export default About;
