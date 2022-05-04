import axios from 'axios';

const BASE_URL = 'http://54.147.60.120:5000/'
export const parseQuery = (database, schema, query) => axios.post(BASE_URL+`query?database=${database}&query=${query}&schema=${schema}`);

