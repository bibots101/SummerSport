import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  editPlayerForm:FormGroup
  findedPlayer:any;
  id:any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    let players = JSON.parse(localStorage.getItem("players") || "[]")
    this.findedPlayer = players.find((obj) => {return obj.id == this.id})
  }
  editPlayer(){

  }  

}
