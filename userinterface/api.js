import axios from 'axios';

const BASE_URL = 'http://18.209.23.179:5000/'
export const parseQuery = (database, schema, query) => axios.post(BASE_URL+`query?database=${database}&query=${query}&schema=${schema}`);

