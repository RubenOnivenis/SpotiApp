import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


const headers = new HttpHeaders({
  'Authorization': 'Bearer BQBOn-UC1zGWo0XQ-a8DIYiPIW2FQesM3J7PCdEM3HPfeoVmYvXXyBHJ635NEGx4OKVJthF_-aDZJRtQzfk'
});

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http:HttpClient
  ) {}

  getQuery(query: string){
    const UrlBase:string = `https://api.spotify.com/v1/${query}`;
    return this.http.get( UrlBase, {headers}); 
  }

  getNewReleases(){
    return this.getQuery("browse/new-releases")
      .pipe(map((data: any) => data.albums.items));
  }
  
  getArtists(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((data: any) => data.tracks));
  }

}
