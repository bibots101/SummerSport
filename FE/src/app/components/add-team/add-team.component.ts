import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addTeamForm:FormGroup
  team:any = {}
  constructor() { }

  ngOnInit() {
  }
  addTeam(){
    let T = JSON.parse(localStorage.getItem("teams") || "[]")
    let teamId = JSON.parse(localStorage.getItem("teamId") || "0")
    console.log(this.team)
    this.team.id = teamId
    T.push(this.team)
    localStorage.setItem("teams",JSON.stringify(T))
    localStorage.setItem("teamId",JSON.stringify(teamId+1))

  }
}
