import { HttpService } from './../service/http.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  list$: Observable<Movie[]>=this.httpService.getMovieList();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
   this.getMovies()

  }

  getMovies(): void {
    this.list$.subscribe(
      data=>console.log(data)
    )
  }

  deleteMovie(id: number): any {
    this.httpService.deleteMovie(id).subscribe(
      p=> console.log(id)
    )
  }

}
