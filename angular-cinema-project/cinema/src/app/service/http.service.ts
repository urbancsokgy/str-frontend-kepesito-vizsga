import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // BASE_URL = 'http://localhost:3000/movies';
   BASE_URL = 'https://tr360-frontend-exam-april.azurewebsites.net/urbancsokgy/movies';

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.BASE_URL)
  }

  deleteMovie(id: number):Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
  create(movie: Movie): Observable<Movie>{
    return this.http.post<any>(`${this.BASE_URL}`, movie);
  }
  update(movie: Movie): Observable<Movie>{
    return this.http.patch<Movie>(`${this.BASE_URL}/${movie.id}`, movie);
   }
}
