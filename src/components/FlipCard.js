import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FlipCard.css";

const FlipCard = ({ user }) => {
  const [flip, setFlip] = useState(false);
  const [repos, setRepos] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [gists, setGists] = useState();

  useEffect(() => {
    const runEffect = async () => {
      const { data } = await axios.get(user.url);
      setRepos(data.public_repos);
      setFollowers(data.followers);
      setFollowing(data.following);
      setGists(data.public_gists);
    };
    runEffect();
  }, [user]);

  const onClick = e => {
    setFlip(!flip);
  };
  return (
    <div className="scene scene--card">
      <div
        className={`card ${flip ? "is-flipped" : ""}`}
        onClick={e => onClick(e)}
      >
        <div className={`card__face card__face--front `}>
          <img src="iconfinder_github_1220319.png" alt="" />
        </div>
        <div className={`card__face card__face--back `}>
          <img src={user.avatar_url} alt="" />
          <p>Name: {user.login}</p>
          <div className="btn">
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              Perfil
            </a>
          </div>
          <p>Repos: {repos}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Gists: {gists}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
