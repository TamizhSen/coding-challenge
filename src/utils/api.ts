import axios from 'axios';

const api = axios.create({
  baseURL: 'https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/',
});

export default api;
