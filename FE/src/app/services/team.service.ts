import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURL : string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  getAllTeams(){}
  getTeamById(){}
  addTeam(){}
  updateTeam(){}
  deleteTeam(){}
}
