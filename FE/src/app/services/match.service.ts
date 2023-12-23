import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchURL :string = "http://localhost:8080/api/matches";
  constructor(private http:HttpClient) {}
  
  getAllMatches(){
    return this.http.get(this.matchURL);
  }
  getMatchById(id){
    return this.http.get(this.matchURL + "/" + id);
  }
  deleteMatchById(id){
    return this.http.delete(this.matchURL + "/" + id)
  }
  addMatch(matchObj){
    return this.http.post(this.matchURL,matchObj);
  }
  editMatch(matchObj){
    return this.http.put(this.matchURL,matchObj);
  }
}
