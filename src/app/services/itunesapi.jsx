import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const itunesApi = () => {
  const baseUrl = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

  const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response;
  };
  return {
    getAll,
  };
};
