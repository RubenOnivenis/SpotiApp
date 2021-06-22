import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(imagenes: any [] ): string {

    if(!imagenes || imagenes.length == 0){
      return "assets/img/noimage.png";
    }
    return imagenes[0].url;
  }

}
