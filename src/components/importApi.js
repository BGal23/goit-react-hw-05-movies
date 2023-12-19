import axios from 'axios';

export const getAllVideos = async query => {
  const keyUrl = 'b210646498b3592e6bb7ee7bde572bd7';
  const basicUrl = `https://api.themoviedb.org/3${query}api_key=${keyUrl}`;
  const resp = await axios.get(basicUrl);
  return resp;
};
