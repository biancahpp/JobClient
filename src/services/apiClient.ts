import { JobRaw } from '../interface/Jobs';
import api from './apiConfig';

export async function apiDisplayInfo() {
  const response = await api.get('/job');
  return response.data;
}

export async function postJob(job:JobRaw) {
  const response = await api.post('/job', job);
  return response.data;
}

