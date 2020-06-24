import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt'
})
export class SqrtPipe implements PipeTransform {

  //transform(value: any, args?: any): any {
  //  return null;
  //}

  transform(value: number): number {
    return Math.sqrt(value);
  }

}
