import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: [
  ]
})
export class TarjetaComponent implements OnInit {

  @Input() items: any[] = [];
  
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  verArtista(item:any){
    let idArtista;
    if (item.type === 'artist'){
      idArtista = item.id;

    } 
    else{
      idArtista = item.artists[0].id;
    }
    console.log(idArtista);
    this.router.navigate(['/artist', idArtista]);
  }
}
