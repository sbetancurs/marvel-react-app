/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

const Favourites = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const currentFavs = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavs(currentFavs);
  }, []);
  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          {favs.length > 0 &&
            favs.map((fav) => (
              <div key={fav.id} className='fav'>
                <img
                  className='fav-image'
                  src={`${fav.thumbnail.path}.${fav.thumbnail.extension}`}
                  alt={fav.name}
                />
                {fav.name}
              </div>
            ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          align-items: start;
          justify-content: start;
          flex-direction: column;
          padding-bottom: 5rem;
        }
        h1 {
          color: var(--main-title);
        }
        .wrapper {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
        }
        .fav {
          display: flex;
          justify-content: start;
          align-items: center;
          padding: 1rem 0;
          border: 1px solid gray;
        }
        .fav-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default Favourites;
