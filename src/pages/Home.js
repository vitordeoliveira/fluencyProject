import React, { useEffect, useState } from "react";
import FlipCard from "../components/FlipCard";
import axios from "axios";

import "./Home.css";
const Home = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    const runEffect = async () => {
      const { data } = await axios.get(
        `https://api.github.com/users?since=${Math.random() * (1000 - 1) + 1}`
      );
      setstate(data);
    };
    runEffect();
  }, []);

  return (
    <div>
      <h1 className="refresh"> Randow users F5 from refresh</h1>
      <ul className="grid-template-4">
        {state.map(doc => (
          <FlipCard user={doc}></FlipCard>
        ))}
      </ul>
    </div>
  );
};

export default Home;
