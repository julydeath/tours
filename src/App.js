import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setList(data));
    setLoading(false);
  };

  const handleDelete = (id) => {
    const newList = list.filter((li) => li.id !== id);
    setList(newList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <h2>Our Tours</h2>
      <Tours list={list} handleDelete={handleDelete} />
    </main>
  );
}

export default App;
