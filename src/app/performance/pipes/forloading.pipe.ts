import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forloading'
})
export class ForloadingPipe implements PipeTransform {

  transform(name: unknown, ...args: unknown[]): unknown {
    console.log("pipe call");
     if(name==='m'){
      return 'mujeeb'
     }
     if(name==='v'){
      return 'vishnu'
     }
     if(name==='shi'){
      return 'shibu'
     }
     if(name==='sa'){
      return 'sajith'
     }
     if(name==='sha'){
      return 'shahabas'
     }

     else{
      return 'no name'
     }
  }

}
