import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matches:any;
  constructor(private router : Router, private matchService:MatchService) { }

  ngOnInit() {
    // this.matches = JSON.parse(localStorage.getItem("matches") || "[]")
    this.matchService.getAllMatches().subscribe(
      (res)=>{
        this.matches = res;
      }
    );
    
  }
  goToEdit(id:any){
    this.router.navigate(["editMatch/"+id])
  }
  goToDisplay(id:any){
    this.router.navigate(["matchInfo/"+id])
  }
  deleteMatch(id:any){
    this.matchService.deleteMatchById(id).subscribe(
      (res)=> {
        console.log("delete response ",res);
        
      }
    )
  }

}
