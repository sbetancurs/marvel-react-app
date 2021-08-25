import { getCharacter } from "services/apiClient";

import Character from "components/Character";

const detail = ({ character }) => {
  return (
    <>
      <div className='container'>
        <label className='title'>Detail of comics for {character.name}</label>
        <Character character={character} detail={true} />
      </div>
      <style jsx>{`
        .container {
          padding: 1rem 0;
          height: 100vh;
          height: 100%;
          flex-direction: column;
          display: flex;
          justify-content: space-between;
          padding-bottom: 1rem;
        }
        .title {
          text-align: center;
          font-weight: bold;
          color: var(--main-title);
          font-size: var(--fontsize-md);
          margin-bottom: 3rem;
        }
      `}</style>
    </>
  );
};

export default detail;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const character = await getCharacter(id);
  return { props: { character: character.results[0] } };
}
