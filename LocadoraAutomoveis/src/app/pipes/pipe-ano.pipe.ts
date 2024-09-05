import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeAno',
  standalone: true
})
export class PipeAnoPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    const date = new Date(value);
    const year = date.getFullYear();
    return `Ano: ${year}`;
  }

}
