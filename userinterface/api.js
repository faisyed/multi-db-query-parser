import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000/'
export const parseQuery = (database, query) => axios.post(BASE_URL+`query?database=${database}&query=${query}`);

