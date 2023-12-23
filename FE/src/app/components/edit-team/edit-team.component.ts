import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  editTeamForm:FormGroup
  findedTeam:any;
  id:any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    let teams = JSON.parse(localStorage.getItem("teams") || "[]")
    this.findedTeam = teams.find((obj) => {return obj.id == this.id})
  }
  editMatches(){

  }  

}
