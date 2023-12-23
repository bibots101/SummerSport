import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players:any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem("players") || "[]")
  }

  goToEdit(id:any){
    this.router.navigate(["editPlayer/"+id])
  }
  goToDisplay(id:any){
    this.router.navigate(["playerInfo/"+id])
  }

}
