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
      <form onSubmit={handleSubmit} className="mt-6">
        <label
          htmlFor="date"
          className="block text-lg font-medium text-gray-700"
        >
          Select a Date:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          className="mt-2 border p-2 rounded-md"
          min={"1995-06-16"}
          max={new Date().toISOString().split("T")[0]}
        />
      </form>

      {loading ? (
        <Loading />
      ) : (
        photo && (
          <div className="mt-6 items-center justify-center">
            <h2 className="text-xl font-semibold text-center">{photo.title}</h2>

            <img
              src={photo.hdurl}
              alt={photo.title}
              className="mt-4 rounded-lg shadow-lg max-w-sm mx-auto object-contain"
            />
            <p className="mt-2 max-w-lg text-center">{photo.explanation}</p>
          </div>
        )
      )}
    </>
  );
};

export default NasaFun;
