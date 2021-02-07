import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDot',
})
export class RemoveDotPipe implements PipeTransform {
  transform(value: string): unknown {
    return value.replace(/\./g, '');
  }
}
