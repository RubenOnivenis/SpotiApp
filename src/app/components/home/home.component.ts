import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones!:any;
  error:boolean = false;
  mensajeError:string = "";
  loading:boolean = true;

  constructor(
    //private http:HttpClient,
    private _spotifyService: SpotifyService
  ) {
    this._spotifyService.getNewReleases().subscribe( (data:any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio) => {
        this.error = true;
        this.loading = false;
        this.mensajeError = errorServicio.error.error.message;
    });
    /*this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((resp:any) => {
      console.log(resp);
    })*/
   }

  ngOnInit(): void {
  }

}
