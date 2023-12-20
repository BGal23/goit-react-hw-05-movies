import axios from 'axios';

export const getAllVideos = async query => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  const keyURL = 'b210646498b3592e6bb7ee7bde572bd7';
  const queryURL = `${query}api_key=${keyURL}`;
  const resp = await axios.get(queryURL);
  return resp;
};
