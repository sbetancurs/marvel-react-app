/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

import { getAllCharacters } from "../../services/apiClient";

import Character from "../Character";
import Pagination from "../Pagination";

import { breakpoints } from "../../styles/theme";

import usePagination from "../../hooks/usePagination";

const Characters = ({ orderBy, search }) => {
  const [characters, setCharacters] = useState([]);

  const limit = 10;
  const [totalPages, setTotalPages] = useState(1);

  const { next, prev, jump, pagination, maxPage } = usePagination(totalPages);

  useEffect(() => {
    getAllCharacters(pagination.offset, limit, search, orderBy).then((data) => {
      setCharacters(data.results);
      setTotalPages(Math.ceil(data.total / limit));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination, orderBy, search]);

  return (
    <>
      <div className='container'>
        <div className='character-list'>
          {characters.length > 0 &&
            characters.map((character) => (
              <Character key={character.id} character={character} />
            ))}
        </div>
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={maxPage}
          handleChangePage={jump}
          handlePrevPage={prev}
          handleNextPage={next}
        />
        {characters.length === 0 && (
          <div className='alert'>
            <p className='alert-danger'>
              Oops! There is no any character that start with: <b>{search}</b>
            </p>
          </div>
        )}
      </div>
      <style jsx>{`
        .container {
          height: 100%;
          padding: 1rem 0;
        }

        .character-list {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 50px;
          place-items: center;
          margin-top: 1rem;
        }

        @media (min-width: ${breakpoints.ipad}) {
          .character-list {
            grid-template-columns: repeat(1, 1fr);
          }
        }
        @media (min-width: ${breakpoints.laptop}) {
          .character-list {
            grid-template-columns: repeat(2, 1fr);
          }
          .section-header {
            flex-direction: row;
          }
        }
      `}</style>
    </>
  );
};

export default Characters;
