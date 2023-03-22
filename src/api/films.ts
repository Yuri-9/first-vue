import { Film, IFilm } from '@/types/film';
import BaseService from './base-service';

const BASE_URL_FILMS = 'https://tame-erin-pike-toga.cyclic.app/';

class FilmsService extends BaseService {
  async getFilms() {
    return this.axiosInstance.get('/movies').then((response) => response.data.map((film: any) => new Film(film)));
  }
  getFilmById(id: number): Promise<IFilm> {
    return this.axiosInstance.get(`movies/${id}`).then((response) => new Film(response.data));
  }
}

export default new FilmsService(BASE_URL_FILMS);
