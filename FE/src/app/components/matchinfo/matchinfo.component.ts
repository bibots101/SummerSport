import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchinfo',
  templateUrl: './matchinfo.component.html',
  styleUrls: ['./matchinfo.component.css']
})
export class MatchinfoComponent implements OnInit {
  id:any;
  findedMatch:any;
  constructor(private activatedRoute: ActivatedRoute, private matchService:MatchService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    this.matchService.getMatchById(this.id).subscribe(
      (res)=>{
        this.findedMatch = res;
      }
    )
    // let matches = JSON.parse(localStorage.getItem("matches") || "[]")
    // this.findedMatch = matches.find((obj) => {return obj.id == this.id})
  }
}
