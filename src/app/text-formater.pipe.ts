import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'textFormater'})
export class TextFormaterPipe implements PipeTransform {
  transform(value: string , appendValue: string): string {
    let newStr: string = value;
    newStr +=appendValue;
    return newStr;
  }
}
