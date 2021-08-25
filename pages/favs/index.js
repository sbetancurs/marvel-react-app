/* eslint-disable @next/next/no-img-element */
import Favourites from "components/Favourites";

const Favs = () => {
  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='section-title'>
            <img src='/icons/favourites.png' alt='favourites' />
            My favourites
          </div>
        </div>
        <Favourites />
      </div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding-bottom: 5rem;
        }
        h1 {
          color: var(--main-title);
        }
        .header {
          display: flex;
          flex-direction: column;
        }
        .section-title {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--main-title);
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Favs;
