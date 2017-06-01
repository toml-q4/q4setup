import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkify'
})
export class LinkifyPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      let links = value.split('\n');
      let result = '';
      let index = 1;
      links.forEach(url => {
        result += `<a href="http://${url}" target="_blank" title="[open new tab] ${url}">Link ${index}</a>`;
        result += `<span class="link-source">${url}</span>`;
        index++;
    });

      return result;
    }

    return value;
  }

}
