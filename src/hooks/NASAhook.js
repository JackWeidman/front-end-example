import { useState, useEffect } from "react";
import axios from "axios";

const useNASAPhotoOfTheDay = (date) => {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api_key = process.env.REACT_APP_NASA_API_KEY;

  useEffect(() => {
    const fetchPhoto = async () => {
      if (!date) return;

      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod",
          {
            params: {
              api_key: api_key,
              date: date,
            },
          }
        );
        setPhoto(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhoto();
  }, [api_key, date]);
  return { photo, loading, error };
};

export default useNASAPhotoOfTheDay;
