import React, { useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const getData = async () => {
    try {
      const fetchedData = await fetch("http://localhost:5000/api/contacts");
      const res = await fetchedData.json();
      setData(res);
    } catch (error) {
      setError(error.message);
    }
  };
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <div className="btn_div">
        <button onClick={getData} className="fetch_btn">
          Fetch
        </button>
      </div>

      <ul>
        {data.map((item) => (
          <li key={item.id} className="list_items">
            {item.firstName} {item.lastName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Fetch;
