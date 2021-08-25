/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import Characters from "/components/characters";

export default function Home() {
  const [orderBy, setOrderBy] = useState("");
  const [search, setSearch] = useState("");

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

  return (
    <>
      <div className='header'>
        <div className='section-title'>
          <img src='/icons/characters.png' alt='characters' />
          Characters
        </div>
        <div className='form-actions'>
          <input
            name='search'
            className='search-control'
            type='text'
            placeholder='Type some name...'
            value={search}
            onChange={handleChange}
          />
          <div className='actions-group'>
            <select name='orderBy' value={orderBy} onChange={handleChange}>
              <option value='name'>↑ Name</option>
              <option value='modified'>↑ Modified</option>
              <option value='-name'>↓ Name</option>
              <option value='-modified'>↓ Modified</option>
            </select>
          </div>
        </div>
      </div>
      <Characters orderBy={orderBy} search={search} />
      <style jsx>{`
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

        .form-actions {
          padding: 1rem 0;
          color: var(--main-title);
          font-weight: bold;
          display: grid;
          place-items: center;
        }
        .search-control {
          padding: 0.5rem 1rem;
          border-radius: 5px;
          outline: none;
          width: 100%;
        }
        .actions-group {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-top: 0.2rem;
        }
        select {
          padding: 0.5rem 1rem;
          width: 100%;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
}
