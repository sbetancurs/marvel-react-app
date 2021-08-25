import { useState, useEffect } from "react";
function useFavs() {
  const [favs, setFavs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs") || "[]"));
  }, []);

  const addFav = (fav) => {
    setLoading(true);
    const newFav = { id: fav.id, name: fav.name, thumbnail: fav.thumbnail };

    const localFavs = JSON.parse(localStorage.getItem("favs") || "[]");
    if (!localFavs.some((x) => x.id === newFav.id)) {
      const newFavs = [...localFavs];
      newFavs.push(newFav);

      setFavs(newFavs);
      localStorage.setItem("favs", JSON.stringify(newFavs));
      setLoading(false);
    }
  };

  const removeFav = ({ id }) => {
    setLoading(true);
    const newFavs = favs.filter((x) => x.id !== id);
    setFavs(newFavs);
    localStorage.setItem("favs", JSON.stringify(newFavs));
    setLoading(false);
  };

  const isFav = (id) => {
    return favs.some((x) => x.id === id);
  };

  return { favs, addFav, removeFav, isFav, loading };
}

export default useFavs;
