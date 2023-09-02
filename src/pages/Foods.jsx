import Navbar from "@/components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import "@/styles/Foods.css";
import { Link } from "react-router-dom";

const Foods = () => {
  const [foods, setFoods] = useState(null);

  const fetchFoods = async () => { 
    const res = await axios.get("http://localhost:3000/foods");
    setFoods(res.data);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/foods").then((res) => {
      setFoods(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <h1>Foods</h1>
      <button onClick={fetchFoods}>Fetch Foods</button>
      {foods ? (
        foods.map((food) => { 
          return (
            <Link to={`/foods/${food.id}`} key={food.id}> {}
              <div className="card">
                <img src={food.image} alt={food.title} />
                <h3>{food.title}</h3>
                <p>{food.price}</p>
              </div>
            </Link>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Foods;
