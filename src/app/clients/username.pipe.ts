import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      let links = value.split('\\');
      let result = '';

      if (links.length == 1) { return value; }
      else {
        let username = links[links.length - 1];
        result = `${username}<br/><span title="Domain">Domain: ${value.replace(username, '').substring(0, value.lastIndexOf('\\'))}</span>`;
      }

      return result;
    }

    return value;
  }
}
