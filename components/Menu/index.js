/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Menu = () => {
  const [currentSession, setCurrentSession] = useState("");
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem("session");
    if (session) {
      setCurrentSession(session);
    } else if (router.pathname !== "/login") {
      router.push("/login");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigation = (e, path) => {
    if (currentSession) {
      if (path === "login") {
        localStorage.removeItem("session");
        setCurrentSession(null);
        router.push("/login");
      } else if (path === "favs") {
        router.push("/favs");
      } else {
        router.push("/");
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <nav>
        <a className='hide-icon' onClick={(e) => handleNavigation(e, "favs")}>
          <img
            className='link-icon'
            src='/icons/favourite-star.svg'
            alt='fav'
          />
        </a>
        <a className='marvel-icon' onClick={(e) => handleNavigation(e, "/")}>
          <img className='marvel' src='/images/marvel-icon.png' alt='marvel' />
        </a>
        <a className='hide-icon' onClick={(e) => handleNavigation(e, "login")}>
          <img className='link-icon' src='/icons/logout.png' alt='logout' />
        </a>
        <style jsx>{`
          nav {
            background: var(--bg-secondary);
            width: 100%;
            position: fixed;
            bottom: 0;
            height: 75px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 01rem;
          }
          .marvel-icon {
            width: 110px;
          }
          .link-icon {
            width: 50px;
          }
          .marvel {
            width: 110px;
            position: absolute;
            top: -45%;
          }

          .hide-icon {
            visibility: ${currentSession ? "visible" : "hidden"};
          }
        `}</style>
      </nav>
    </>
  );
};

export default Menu;
