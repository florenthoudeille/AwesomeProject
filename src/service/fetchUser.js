import axios from 'axios';

export const getDatas = async (url) => {
  return await axios
    .get(url)
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
