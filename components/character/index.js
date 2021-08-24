/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

import { breakpoints } from "styles/theme";

const Character = ({ character, favs, setFavs, isFav }) => {
  const addFav = (e, fav) => {
    const newFav = { id: fav.id, name: fav.name, thumbnail: fav.thumbnail };

    if (!favs.some((x) => x.id === newFav.id)) {
      const newFavs = favs.slice();
      newFavs.push(newFav);
      setFavs(newFavs);
      localStorage.setItem("favs", JSON.stringify(newFavs));
    }
  };

  const removeFav = (e, fav) => {
    const { id } = fav;

    const newFavs = favs.filter((x) => x.id !== id);
    setFavs(newFavs);
    localStorage.setItem("favs", JSON.stringify(newFavs));
  };

  return (
    <div className='character'>
      <div className='card-body'>
        <div className='left-content'>
          <img
            className='character-image'
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          {!isFav && (
            <button
              className='btn btn-favs'
              onClick={(e) => addFav(e, character)}
            >
              Add fav ★
            </button>
          )}
          {isFav && (
            <button
              className='btn btn-favs'
              onClick={(e) => removeFav(e, character)}
            >
              Remove Fav ☆
            </button>
          )}
        </div>
        <div className='right-content'>
          <label className='name'>{character.name}</label>
          <div className='info'>
            <p title={character.description}>{character.description}</p>
          </div>
        </div>
      </div>
      <div className='card-footer'>
        <div className='title'>Related comics</div>
        <div className='comics'>
          {character.comics.items.slice(0, 6).map((comic) => (
            <a className='comic' key={comic.id} href='#' title={comic.name}>
              ▸{comic.name}
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        .character {
          background-color: white;
          color: var(--textcolor);
          height: 450px;
          border: 1px solid black;
          width: 100%;
        }
        .card-body {
          display: flex;
          height: 50%;
          flex-direction: row;
        }
        .left-content {
          position: relative;
          min-width: 40%;
        }
        .btn-favs {
          position: absolute;
          top: 65%;
          left: 25%;
          cursor: pointer;
        }
        .character-image {
          border-radius: 50%;
          box-shadow: 3px 2px 10px black;
          left: -5%;
          position: absolute;
          top: -5%;
          width: 6rem;
          height: 6rem;
        }
        .right-content {
          min-width: 60%;
          padding: 0.5rem;
        }
        .name {
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          color: var(--main-title);
          display: -webkit-box;
          font-size: 1.3rem;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }
        .info {
          width: 100%;
          font-size: var(--fontsize-xs);
          min-height: 65%;
        }
        p {
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 9;
          -webkit-box-orient: vertical;
        }
        button {
          margin-top: 0.5rem;
        }
        button:hover {
          transform: scale(1.2);
          transition: 0.5s;
        }
        .card-footer {
          display: flex;
          flex-direction: column;
          padding: 0 0.5rem;
          height: 50%;
        }
        .title {
          padding: 0.5rem 0;
          color: var(--main-title);
          font-weight: bold;
          font-size: var(--fontsize-sm);
        }
        .comics {
          font-size: var(--fontsize-xs);
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 5px;
          overflow: hidden;
        }
        .comic {
          text-decoration: none;
          color: var(--textcolor);

          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .comic:hover {
          text-decoration: underline;
          color: var(--bg-secondary);
        }

        @media (min-width: ${breakpoints.ipad}) {
          .character {
            width: 450px;
          }

          .character-image {
            width: 8rem;
            height: 8rem;
            left: -10%;
            top: -10%;
          }
        }
      `}</style>
    </div>
  );
};

export default Character;
