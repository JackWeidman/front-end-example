import React from "react";

const LinkedInCard = () => {
  return (
    <div className=" items-center bg-gray-100 p-4 rounded-lg shadow-lg">
      {/* I know that I am using aws s3 buckets, when I could be using firebase storage
      I wanted to show that I know how to use both. 
      I am also aware that I am making all of my env variables public, and that is not a good idea.
      I am doing this because I am not using any sensitive information, and for ease of use on your end. */}
      {/* TODO: make sure photo is centered on mobile */}
      <img
        src="https://upunikself-bucket.s3.us-east-2.amazonaws.com/weidman+481.webp" // Replace with your profile photo URL
        alt="Your LinkedIn Profile"
        className="max-w-[250px] max-h-xs rounded-full"
      />

      <div className="ml-4">
        <p className="text-center text-xlg font-bold">John Weidman</p>
        <a
          href="https://www.linkedin.com/in/john-weidman-685601261?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0yA%2F27H6Sia7GOYUJ2U4dw%3D%3D" // Replace with your LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-center block"
        >
          View My LinkedIn Profile
        </a>
      </div>
    </div>
  );
};

export default LinkedInCard;
