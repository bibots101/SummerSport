import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  editMatchForm:FormGroup
  findedMatch:any;
  id:any;
  constructor(private activatedRoute: ActivatedRoute,private matchService:MatchService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    return this.matchService.getMatchById(this.id).subscribe(
      (res)=>{
        this.findedMatch = res;
      }
    )
    // let matches = JSON.parse(localStorage.getItem("matches") || "[]")
    // this.findedMatch = matches.find((obj) => {return obj.id == this.id})
  }
  editMatch(){

    this.matchService.editMatch(this.findedMatch).subscribe(
      (res)=>{
        console.log("edit response",res);
        
      }
    )
  }  

}
