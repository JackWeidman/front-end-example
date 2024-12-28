import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [organization, setOrganization] = useState("");
  const [design, setDesign] = useState("");
  const [reusable, setReusable] = useState("");
  const [responsive, setResponsive] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !message ||
      !organization ||
      !design ||
      !reusable ||
      !responsive
    ) {
      alert("Please fill out all the fields.");
      return;
    }

    // Validate email format using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const serviceId = "service_vinfh9s";
    const templateId = "template_7ogzmay";
    const publicKey = "A69SzMNP2DsFIyfWZ";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Jack Weidman",
      message: message,
      organization_feedback: organization,
      design_feedback: design,
      reusable_feedback: reusable,
      responsive_feedback: responsive,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
        setOrganization("");
        setDesign("");
        setReusable("");
        setResponsive("");
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });

    alert("Thank you for reaching out to me!");
    onClose();
  };

  return (
    <div className="flex justify-center items-center">
      <form className="bg-white p-6 w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>

        {/* Name input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Message input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* Organization */}
        <div className="flex flex-col space-y-2 mb-4">
          <strong>How well did I organize my code?</strong>
          <div className="flex items-center">
            <input
              type="radio"
              id="very-well"
              name="organization"
              value="Very Well"
              checked={organization === "Very Well"}
              onChange={(e) => setOrganization(e.target.value)}
            />
            <label htmlFor="very-well">Very Well</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="just-ok"
              name="organization"
              value="Just Ok"
              checked={organization === "Just Ok"}
              onChange={(e) => setOrganization(e.target.value)}
            />
            <label htmlFor="just-ok">Just Ok</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="need-work"
              name="organization"
              value="You need work"
              checked={organization === "You need work"}
              onChange={(e) => setOrganization(e.target.value)}
            />
            <label htmlFor="need-work">You need work</label>
          </div>
        </div>
        {/* Design  */}
        <div className="flex flex-col space-y-2 mb-4">
          <strong>How well did I design the interface?</strong>
          <div className="flex items-center">
            <input
              type="radio"
              id="very-well"
              name="design"
              value="Very Well"
              checked={design === "Very Well"}
              onChange={(e) => setDesign(e.target.value)}
            />
            <label htmlFor="very-well">Very Well</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="just-ok"
              name="design"
              value="Just Ok"
              checked={design === "Just Ok"}
              onChange={(e) => setDesign(e.target.value)}
            />
            <label htmlFor="just-ok">Just Ok</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="need-work"
              name="design"
              value="You need work"
              checked={design === "You need work"}
              onChange={(e) => setDesign(e.target.value)}
            />
            <label htmlFor="need-work">You need work</label>
          </div>
        </div>
        {/* Resuability  */}
        <div className="flex flex-col space-y-2 mb-4">
          <strong>How well did I create reusable code?</strong>
          <div className="flex items-center">
            <input
              type="radio"
              id="very-well"
              name="reusable"
              value="Very Well"
              checked={reusable === "Very Well"}
              onChange={(e) => setReusable(e.target.value)}
            />
            <label htmlFor="very-well">Very Well</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="just-ok"
              name="reusable"
              value="Just Ok"
              checked={reusable === "Just Ok"}
              onChange={(e) => setReusable(e.target.value)}
            />
            <label htmlFor="just-ok">Just Ok</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="need-work"
              name="reusable"
              value="You need work"
              checked={reusable === "You need work"}
              onChange={(e) => setReusable(e.target.value)}
            />
            <label htmlFor="need-work">You need work</label>
          </div>
        </div>
        {/* Responsive  */}
        <div className="flex flex-col space-y-2 mb-4">
          <strong>How well did I create responsive solutions?</strong>
          <div className="flex items-center">
            <input
              type="radio"
              id="very-well"
              name="responsive"
              value="Very Well"
              checked={responsive === "Very Well"}
              onChange={(e) => setResponsive(e.target.value)}
            />
            <label htmlFor="very-well">Very Well</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="just-ok"
              name="responsive"
              value="Just Ok"
              checked={responsive === "Just Ok"}
              onChange={(e) => setResponsive(e.target.value)}
            />
            <label htmlFor="just-ok">Just Ok</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="need-work"
              name="responsive"
              value="You need work"
              checked={responsive === "You need work"}
              onChange={(e) => setResponsive(e.target.value)}
            />
            <label htmlFor="need-work">You need work</label>
          </div>
        </div>
        {/* Repeat for design, reusable, and responsive */}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
