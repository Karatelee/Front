import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Food = () => {
  const [food, setFood] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3000/foods/${id}`).then((res) => {
      setFood(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <h1>Food</h1>
      {food ? (
        <div>
          <img src={food.image} alt={food.title} />
          <h3>{food.title}</h3>
          <p>{food.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Food;
