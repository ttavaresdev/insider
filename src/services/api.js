import axios from 'axios';
/* filmes cartaz
https://api.themoviedb.org/3/movie/now_playing?api_key=a8e96c76f2e3f816d2ba6b74aebcc4da&language=pt-BR&page=1
*/
export const key = 'a8e96c76f2e3f816d2ba6b74aebcc4da';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})
export default api;