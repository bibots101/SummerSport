import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchfilter'
})
export class MatchfilterPipe implements PipeTransform {

  transform(objs: any, term: string): any {
    if (objs && term != undefined) {
      return objs.filter((m: any) => m.teamOne.toUpperCase().includes(term.toUpperCase()) || m.teamTwo.toUpperCase().includes(term.toUpperCase()));
    }
    else {
      return objs
    }
  }

}
