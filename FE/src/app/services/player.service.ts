import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL : string = "http://localhost:8080/api/players"
  constructor(private http:HttpClient) {}

  getAllPlayers(){}
  getPlayerById(){}
  addPlayer(){}
  updatePlayer(){}
  deletePlayerById(){}
}
