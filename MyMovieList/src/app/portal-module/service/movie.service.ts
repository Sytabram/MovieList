import { Injectable } from '@angular/core';
import {Movie} from "../model/movie";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = "https://localhost:5001/movies";
  movie: any;
  constructor(private http: HttpClient)
  { }
  getMovies(): Observable<Array<Movie>>
  {
    return this.http.get<[Movie]>(this.url);
  }
  addMovie(movie: Movie)
  {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }

    var json = "{\n" +
      "  \"name\": \""+ movie.name + "\",\n" +
      "  \"year\": " +  movie.year+ ",\n" +
      "  \"description\": \""+ movie.description +"\",\n" +
      "  \"rating\": " +  movie.rating + ",\n" +
      "  \"time\": " + movie.time + ",\n" +
      "  \"categoryID\": [\n" +
      "    " + 0 +"\n" +
      "  ],\n" +
      "  \"stoudioID\": [\n" +
      "    " + 0 + "\n" +
      "  ]\n" +
      "}";
    return this.http
      .post(this.url, json, options);
  }
  editMovie(movie: Movie)
  {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }

    var json = "{\n" +
      "  \"name\": \""+ movie.name + "\",\n" +
      "  \"year\": " +  movie.year+ ",\n" +
      "  \"description\": \""+ movie.description +"\",\n" +
      "  \"rating\": " +  movie.rating + ",\n" +
      "  \"time\": " + movie.time + ",\n" +
      "  \"categoryID\": [\n" +
      "    " + 0 +"\n" +
      "  ],\n" +
      "  \"stoudioID\": [\n" +
      "    " + 0 + "\n" +
      "  ]\n" +
      "}";
    return this.http
      .post(this.url + '/' + movie.id.toString(), json, options);
  }
  addPoster(id: number, image: File): Observable<File>
  {
    console.log('poster' )
    let formData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post<File>(this.url + '/'+ id.toString() + '/poster', formData);
  }
  deleteMovie(movie: Movie)
  {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
    }

    return this.http
      .delete(this.url + "/" + movie.id, options);
  }
}
