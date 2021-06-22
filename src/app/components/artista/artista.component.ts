import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading: boolean = true;
  topTracks:any[] = [];

  constructor(
    private _spotifyService:SpotifyService,
    private activatedRoute:ActivatedRoute
  ){ 
    this.activatedRoute.params.subscribe(parametros => {
      this.getArtista(parametros.id); //Se puede poner como la manera del console.log: parametros['id']
      this.getTopTracks(parametros.id);
      console.log(parametros['id']);
    })
   }

  ngOnInit(): void {}

  getArtista(id:string){
    this._spotifyService.getArtist(id)
      .subscribe(artista => {   //El suscribe es ASÍNCRONO, el suscribe es hacer una llamada a algo y cuando ese algo responda yo lo estoy escuchando
        console.log(artista);
        this.artista = artista;
        this.loading = false;
      })
  }

  getTopTracks(id:string){
    this._spotifyService.getTopTracks(id)
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      })
  }

}
