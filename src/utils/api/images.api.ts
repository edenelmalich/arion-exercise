import axios from 'axios';
import { BASE_URL } from '../../../config';

export function ImagesController() {
  const getImages = (pageParam: number) => axios.get(`${BASE_URL}/v2/list?page=${pageParam}&limit=12`);

  return {
    getImages,
  };
}
