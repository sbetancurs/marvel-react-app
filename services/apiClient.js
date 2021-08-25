const api_url = process.env.api_url;
const ts = process.env.ts;
const apiKey = process.env.apiKey;
const hash = process.env.hash;

//@ts-ignore
export const getAllCharacters = async (
  offset,
  limit = 10,
  search = "",
  orderBy = ""
) => {
  let query = `ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}&offset=${offset}`;
  query += search !== "" ? `&nameStartsWith=${search.toLowerCase()}` : "";
  query += orderBy !== "" ? `&orderBy=${orderBy}` : "";

  const response = await fetch(`${api_url}/characters?${query}`);
  const data = await response.json();
  return data.data;
};

export const getCharacter = async (id) => {
  let query = `ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  const response = await fetch(`${api_url}/characters/${id}?${query}`);
  const data = await response.json();
  return data.data;
};
