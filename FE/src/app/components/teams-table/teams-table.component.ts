import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teams:any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.teams = JSON.parse(localStorage.getItem("teams") || "[]")
  }

  goToEdit(id:any){
    this.router.navigate(["editTeam/"+id])
  }
  goToDisplay(id:any){
    this.router.navigate(["teamInfo/"+id])
  }
}
