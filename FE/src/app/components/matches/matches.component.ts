import { Component, OnInit } from '@angular/core';
import { MatchfilterPipe } from 'src/app/pipes/matchfilter.pipe';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})

@Injectable()
export class MatchesComponent implements OnInit {
  matches:any = []
  filterBy : string
  //auth_token:string = "eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2OTA2Njk3NzUsImV4cCI6MTY5MDc1NjE3NX0.piiZjTru8Y-j0C4ykcK1u58Jm-0m-pVNq_mpel0L3-THRBAmWW1gAeoQKqhkBIIzanUVsoRrKNyJ8Huso4ZiPg"
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getAllMatches()
    }
  getAllMatches(){
    /*const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'authorization' : 'Bearer $(auth_token)'
    })
    const requestOption = {headers : headers}
    this.http.get<any>("http://localhost:8086/api/matches", requestOption).subscribe((data:any) => {
    console.log(data);
    })*/
    
    this.matches = JSON.parse(localStorage.getItem("matches") || "[]")
  }
  deleteMatch(id:any){
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id === id) {
        this.matches.splice(i,1)
      }
    }
    localStorage.setItem("matches",JSON.stringify(this.matches))
    this.getAllMatches()
  }

}
