import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forloading'
})
export class ForloadingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
