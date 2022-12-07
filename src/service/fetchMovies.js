import axios from 'axios';

export const getAllMovies = async (url) => {
  return await axios
    .get(url)
    .then((res) => {
      console.log(res);
      return res.data.Search;
    })
    .catch((error) => {
      console.log(error);
    });
};
