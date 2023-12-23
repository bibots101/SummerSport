import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  addMatchForm: FormGroup
  match: any = {}
  constructor(private matchService: MatchService) { }

  ngOnInit() {
  }
  addMatch() {
    /*let T = JSON.parse(localStorage.getItem("matches") || "[]")
    let matchId = JSON.parse(localStorage.getItem("matchId") || "0")
    console.log(this.match)
    this.match.id = matchId
    T.push(this.match)
    localStorage.setItem("matches",JSON.stringify(T))
    localStorage.setItem("matchId",JSON.stringify(matchId+1))*/
    this.matchService.addMatch(this.match).subscribe(
      (res) => {
        console.log("here response from BE", res);

      }
    );

  }
}
