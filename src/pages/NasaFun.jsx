import React, { useState } from "react";
import useNASAPhotoOfTheDay from "../hooks/NASAhook";
import Loading from "../components/Loading";
import Header from "../components/Header";

const NasaFun = () => {
  const [date, setDate] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today.toISOString().split("T")[0];
  });
  const { photo, loading } = useNASAPhotoOfTheDay(date);

  const handleDateChange = (e) => {
    setDate(e.target.value); // Update the date state when the user selects a new date
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} className="mt-4">
        <label
          htmlFor="date"
          className="block text-lg font-medium text-gray-700 ml-2"
        >
          Select a Date:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          className="mt-1 border p-2 rounded-md ml-2"
          min={"1995-06-16"}
          max={new Date().toISOString().split("T")[0]}
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 ml-2"
        >
          Take me to space!
        </button>
      </form>

      {loading ? (
        <Loading />
      ) : (
        photo && (
          <div className="mt-6 p-4 rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-screen-xl mx-auto">
              <img
                src={photo.hdurl}
                alt={photo.title}
                className="mb-4 w-full max-h-[70vh] lg:w-3/5 max-w-4xl h-auto rounded-lg shadow-lg object-contain"
              />
              <div className="mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left flex-1">
                <h2 className="text-xl lg:text-3xl font-semibold">
                  {photo.title}
                </h2>
                <p className="mt-2 text-gray-700 lg:text-lg">
                  {photo.explanation}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default NasaFun;
