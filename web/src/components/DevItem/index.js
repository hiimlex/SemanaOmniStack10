import React from "react";

import "./style.css";
import "font-awesome/css/font-awesome.css";

function DevItem({ dev, onEdit, onDelete }) {
  const [{ editMode, dev: oldDev }, setEditMode] = onEdit;

  function editDev() {
    setEditMode({
      editMode: oldDev._id !== dev._id ? true : !editMode, // Se selecionou um Dev diferente, obrigatóriamente editMode deve ser true.
      dev // Novo Dev
    });
  }

  function deleteDev() {
    onDelete(dev.github);
  }

  return (
    <li className="dev-item">
      <header>
        <img
          src={dev.avatar_url}
          alt={dev.name === null ? dev.github : dev.name}
        />
        <div className="user-info">
          <strong>{dev.name === null ? dev.github : dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
        <button className="edit-dev" onClick={editDev}>
          <i className="fa fa-pencil"></i>
        </button>
        <button className="delete-dev" onClick={deleteDev}>
          <i className="fa fa-times"></i>
        </button>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github}`}>Acessar perfil no GitHub</a>
    </li>
  );
}

export default DevItem;
