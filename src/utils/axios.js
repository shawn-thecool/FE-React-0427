import axios from 'axios';
import { AXIOS_CONFIG } from '../constants';

const instance = axios.create(AXIOS_CONFIG);

export async function callApi(config) {
  return instance({ ...config });
}
