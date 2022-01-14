import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchedData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = "https://rickandmortyapi.com/api/";
  //todo Filter fuer die Charaktere, Locations, species, gender

  useEffect(() => {
    axios(api)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error while fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading all the things...";
  if (error) return "Error!";

  return (
    <>
      {/*todo Bild je nach filter??*/}
      <img />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
