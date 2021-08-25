/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";

import { breakpoints } from "../../styles/theme";

import Loader from "../Loader";

import useFavs from "../../hooks/useFavs";

const Character = ({ character, detail = false }) => {
  const { addFav, removeFav, isFav, loading } = useFavs();
  const router = useRouter();

  const goToDetail = (id) => {
    router.push(`/detail/${character.id}`);
  };

  const description = character.description
    ? character.description
    : "Oops!! Sorry, there is no description available for this character.";

  return (
    <>
      {loading && <Loader />}
      <div className='character'>
        <div className='card-body'>
          <div className='top-content'>
            <img
              className='character-image'
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </div>
          <div className='bottom-content'>
            <label className='name'>{character.name}</label>
            {!detail && (
              <div className='info'>
                <p title={description}>{description}</p>
              </div>
            )}
            {detail && (
              <>
                <div className='comics'>
                  {character.comics.items.slice(0, 6).map((comic) => (
                    <div key={comic.id}>{comic.name}</div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className='card-footer'>
          {!isFav(character.id) && (
            <button
              disabled={loading}
              className='btn '
              onClick={(e) => addFav(character)}
            >
              Add fav ★
            </button>
          )}
          {isFav(character.id) && (
            <button
              disabled={loading}
              className='btn'
              onClick={(e) => removeFav(character)}
            >
              Remove Fav ☆
            </button>
          )}
          {!detail && (
            <button className='btn' onClick={(e) => goToDetail(character.id)}>
              Detail +
            </button>
          )}
        </div>
      </div>
      <style jsx>{`
        .character {
          background-color: white;
          color: var(--textcolor);
          height: 450px;
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 0.5rem;
          border-radius: 5px;
          box-shadow: 1px 1px 10px black;
        }
        .card-body {
          display: flex;
          height: 85%;
          flex-direction: column;
          border-radius: 5px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          border-top: 1px solid gray;
          border-left: 1px solid gray;
          border-right: 1px solid gray;
        }
        .top-content {
          position: relative;
          height: 35%;
          display: flex;
          justify-content: center;
        }
        .bottom-content {
          padding: 0.5rem;
          height: 75%;
        }
        .card-footer {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          border-bottom: 1px solid gray;
          border-left: 1px solid gray;
          border-right: 1px solid gray;
          border-radius: 5px;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          height: 15%;
          padding: 0.2rem 0;
        }
        .btn {
          margin: 0;
          margin-right: 0.5rem;
        }
        .character-image {
          border-radius: 50%;
          box-shadow: 3px 2px 10px black;
          position: absolute;
          top: -35%;
          width: 6rem;
          height: 6rem;
        }
        .name {
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          color: var(--main-title);
          display: -webkit-box;
          font-size: var(--fontsize-md);
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
        }
        .info {
          font-size: var(--fontsize-sm);
        }
        p {
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 7;
          -webkit-box-orient: vertical;
        }
        button {
          margin-top: 0.5rem;
        }
        button:hover {
          transform: scale(1.2);
          transition: 0.5s;
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
          grid-template-columns: repeat(3, 1fr);
          gap: 5px;
          overflow: hidden;
          height: 100%;
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
          .top-content {
            height: 40%;
          }

          .bottom-content {
            height: 60%;
          }

          .character-image {
            width: 8rem;
            height: 8rem;
          }
        }
      `}</style>
    </>
  );
};

export default Character;
