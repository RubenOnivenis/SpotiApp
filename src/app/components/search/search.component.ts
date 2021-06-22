import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  loading:boolean = true;
  artistas:any [] = [];

  constructor(
    private _spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {}

  buscar(termino:string){
    if(termino!=""){
      this._spotifyService.getArtists(termino).subscribe((data: any) => {
        console.log(data);
        this.artistas = data;
        this.loading = false;
       });
    }
   
  }

}
