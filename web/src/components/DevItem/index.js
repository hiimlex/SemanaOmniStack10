import React from "react";

import "./styles.css";
import "font-awesome/css/font-awesome.css";

function DevItem(props) {
  const { dev, onClick } = props;

  async function removeDev() {
    await onClick(dev._id);
  }

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
        <button className="delete-dev" onClick={removeDev}>
          <i className="fa fa-times"></i>
        </button>
      </header>

      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no Github
      </a>
    </li>
  );
}

export default DevItem;
