/* eslint-disable @next/next/no-img-element */
import useFavs from "../../hooks/useFavs";

import { breakpoints } from "../../styles/theme";

const Favourites = () => {
  const { favs, removeFav } = useFavs();

  return (
    <>
      <div className='wrapper'>
        {favs.length > 0 &&
          favs.map((fav) => (
            <div key={fav.id} className='fav'>
              <img
                className='fav-image'
                src={`${fav.thumbnail.path}.${fav.thumbnail.extension}`}
                alt={fav.name}
              />
              <img
                className='fav-remove'
                src='/icons/btn-delete.png'
                alt='delete'
                onClick={(e) => removeFav(fav)}
              />
              {fav.name}
            </div>
          ))}
      </div>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          place-items: center;
        }
        .fav {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem 0;
          width: 100%;
          text-align: center;
          color: var(--main-title);
          font-weight: bold;
          position: relative;
          align-self: flex-start;
        }
        .fav-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          box-shadow: 3px 2px 10px black;
          margin-bottom: 0.3rem;
        }
        .fav-remove {
          top: 5%;
          position: absolute;
          left: 60%;
        }

        @media (min-width: ${breakpoints.ipad}) {
          .wrapper {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: ${breakpoints.laptop}) {
          .wrapper {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: ${breakpoints.pc}) {
          .wrapper {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </>
  );
};

export default Favourites;
