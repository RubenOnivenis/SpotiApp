import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styles: []
})
export class LoadingComponent implements OnInit {

  loading:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
