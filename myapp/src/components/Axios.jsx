import React, { useState } from "react";
import axios from "axios";

function Axios() {
  const [data, setData] = useState([]);
  const [error,setError] = useState("")

  const getData = async () => {
    try {
      const fetchedData = await axios.get("http://localhost:5000/api/contacts");
    const res = fetchedData.data;
    setData(res);
    } catch (error) {
      setError(error.message)
    }
  };
  if(error){
    return <p>{error}</p>
  }
  return (
    <>
      <div className="btn_div">
        <button onClick={getData} className="fetch_btn">
          Axios
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

export default Axios;
