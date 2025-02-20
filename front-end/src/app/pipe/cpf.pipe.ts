import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfPipe',
})
export class CpfPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const str1 = value.slice(0, 3);
    const str2 = value.slice(3, 6);
    const str3 = value.slice(6, 9);
    const str4 = value.slice(9, 11);
    return `${str1}.${str2}.${str3}-${str4} `;
  }
}
