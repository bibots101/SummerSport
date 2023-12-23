import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let reversed:string = ""
    for(let char of value){
      reversed = char + reversed
    }
    console.log(reversed)
    return reversed
  }

}
