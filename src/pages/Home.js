import React, { useEffect, useState } from "react";
import FlipCard from "../components/FlipCard";
import axios from "axios";

import "./Home.css";
const Home = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    const runEffect = async () => {
      const { data } = await axios.get(
        "https://api.github.com/users?since=1000"
      );
      setstate(data);
    };
    runEffect();
  }, []);

  return (
    <div>
      <ul className="grid-template-4">
        {state.map(doc => (
          <FlipCard user={doc}></FlipCard>
        ))}
      </ul>
    </div>
  );
};

export default Home;
