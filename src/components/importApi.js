import axios from 'axios';

export const getAllVideos = async () => {
  const keyUrl = 'b210646498b3592e6bb7ee7bde572bd7';
  const basicUrl = `https://api.themoviedb.org/3/movie/trending/get-trending?api_key=${keyUrl}`;
  const resp = await axios.get(basicUrl);
  console.log(resp);
};
