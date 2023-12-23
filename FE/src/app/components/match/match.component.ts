import { ReversePipe } from './../../pipes/reverse.pipe';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() match:any
  @Output() newMatch : EventEmitter<any> = new EventEmitter
  constructor() { }

  ngOnInit() {
  }
  compare(a:any,b:any){
    if (a>b) {
      return ["(Win)","green"]
    }
    else if(b>a){
      return ["(Loss)","blue"]
    }
    else{
      return ["(Draw)","yellow"]
    }
  }
  passId(id:any){
    this.newMatch.emit(id)

  }

}
