import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yayinBaslik'
})
export class YayinBaslikPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
