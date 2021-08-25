/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { getAllCharacters } from "/services/apiClient";
import Character from "/components/Character";
import { breakpoints } from "styles/theme";

const Characters = () => {
  const limit = 10;

  const [characters, setCharacters] = useState([]);
  const [favs, setFavs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [orderBy, setOrderBy] = useState("");
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState({
    currentPage: 1,
    offset: 0,
  });

  useEffect(() => {
    getAllCharacters(pagination.offset, limit, search, orderBy).then((data) => {
      setCharacters(data.results);
      setTotalPages(Math.ceil(data.total / limit));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination, orderBy, search]);

  useEffect(() => {
    const currentFavs = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavs(currentFavs);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "orderBy":
        setOrderBy(value);
        return;
      case "search":
        setSearch(value);
        return;
    }
  };

  const getNextPage = (e, direction) => {
    if (direction === "prev" && pagination.currentPage > 1) {
      setPagination({
        ...pagination,
        offset: (pagination.offset -= 10),
        currentPage: pagination.currentPage - 1,
      });
    } else if (direction === "next") {
      setPagination({
        ...pagination,
        offset: (pagination.offset += 10),
        currentPage: pagination.currentPage + 1,
      });
    }
  };

  const getCurrentPage = (e, index) => {
    if (!index) {
      setPagination({
        ...pagination,
        offset: totalPages * 10 - 10,
        currentPage: totalPages,
      });
    } else {
      setPagination({
        ...pagination,
        offset: 1 * 10 - 10,
        currentPage: 1,
      });
    }
  };

  return (
    <>
      <div className='container'>
        <div className='section-title'>
          <img src='/icons/characters.png' alt='characters' />
          Characters
        </div>
        <form className='section-header'>
          <input
            name='search'
            className='search-control'
            type='text'
            placeholder='Type some name...'
            value={search}
            onChange={handleChange}
          />
          <button className='btn'>Search</button>
          <select name='orderBy' value={orderBy} onChange={handleChange}>
            <option value='name'>↑ Name</option>
            <option value='modified'>↑ Modified</option>
            <option value='-name'>↓ Name</option>
            <option value='-modified'>↓ Modified</option>
          </select>
        </form>

        <div className='character-list'>
          {characters.length > 0 &&
            characters.map((character) => (
              <Character
                key={character.id}
                character={character}
                favs={favs}
                setFavs={setFavs}
                isFav={favs.some((x) => x.id === character.id)}
              />
            ))}
        </div>
        {characters.length === 0 && (
          <div className='alert'>
            <p className='alert-danger'>
              Oops! There is no any character that start with: <b>{search}</b>
            </p>
          </div>
        )}
        <div className='pagination'>
          <div className='pages'>
            <a className='number' onClick={(e) => getNextPage(e, "prev")}>
              {"<"}
            </a>
            <div
              className={
                pagination.currentPage > 1 ? "number" : "number nohover"
              }
              onClick={(e) => getCurrentPage(e, 1)}
            >
              {pagination.currentPage}
            </div>
            <div className='number nohover'>of</div>
            <div className='number' onClick={getCurrentPage}>
              {totalPages}
            </div>
            <div className='number' onClick={(e) => getNextPage(e, "next")}>
              {">"}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          height: calc(100vh - 250px);
        }
        .section-title {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 1rem;
          color: var(--main-title);
          font-weight: bold;
        }

        .section-header {
          padding: 1.5rem 0;
          color: var(--main-title);
          font-weight: bold;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
        .search-control {
          padding: 0.5rem 1rem;
          border-radius: 5px;
          outline: none;
          width: 75%;
        }

        .character-list {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 50px;
          place-items: center;
          margin-top: 1rem;
          padding: 0 1rem;
        }
        select {
          padding: 0.5rem 1rem;
        }
        .pagination {
          display: flex;
          justify-content: center;
          margin-bottom: 5rem;
          padding: 0 1rem;
        }
        .pages {
          display: flex;
          justify-content: space-around;
          max-width: 400px;
          padding: 1rem 0;
        }
        .number {
          background-color: gray;
          color: white;
          padding: 0.5rem;
          margin-right: 0.5rem;
          cursor: pointer;
        }
        .number:hover {
          transform: scale(1.1);
          transition: 0.3s;
          background-color: #484848;
        }
        .number:first-child {
          display: ${pagination.currentPage === 1 ? "none" : "block"};
        }
        .number:last-child {
          margin-right: 0;
          display: ${pagination.currentPage === totalPages ? "none" : "block"};
        }
        .nohover {
          pointer-events: none;
        }

        @media (min-width: ${breakpoints.ipad}) {
          .character-list {
            grid-template-columns: repeat(1, 1fr);
          }
          .character-card {
            width: 450px;
          }
          .name {
            font-size: var(--fontsize-lg);
          }
          .alert {
            padding: 0;
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
        @media (min-width: ${breakpoints.pc}) {
          .character-card {
            width: 450px;
          }
        }
      `}</style>
    </>
  );
};

export default Characters;
