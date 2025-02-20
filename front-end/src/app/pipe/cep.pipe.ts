import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cepPipe',
})
export class CepPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const str1 = value.slice(0, 5);
    const str2 = value.slice(5, 8);
    return `${str1}-${str2}`;
  }
}
