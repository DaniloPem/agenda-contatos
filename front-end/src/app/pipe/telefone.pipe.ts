import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefonePipe',
})
export class TelefonePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const str1 = value.slice(0, 2);
    const str2 = value.slice(2, -4);
    const str3 = value.slice(-4);
    return `(${str1}) ${str2}-${str3}`;
  }
}
