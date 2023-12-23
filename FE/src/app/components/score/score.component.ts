import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  matches:any=[
    {
      teamOne:"EST",
      teamTwo:"Ca",
      scoreOne:"4",
      scoreTwo:"0"
    },
    {
      teamOne:"TPMZMB",
      teamTwo:"Ca",
      scoreOne:"8",
      scoreTwo:"0"
    },
    {
      teamOne:"RMD",
      teamTwo:"FCB",
      scoreOne:"4",
      scoreTwo:"0"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
