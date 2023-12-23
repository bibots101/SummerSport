import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { PlayersComponent } from './components/players/players.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { DashboardCComponent } from './components/dashboard-c/dashboard-c.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { MatchinfoComponent } from './components/matchinfo/matchinfo.component';
import { AddComponent } from './components/add/add.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"contact",component: ContactComponent},
  {path:"add",component: AddComponent},
  {path:"player",component: PlayersComponent},
  {path:"signIn",component: LoginComponent},
  {path:"SignUp",component: SignupComponent},
  {path:"matches",component: MatchesComponent},
  {path:"dashboardC",component: DashboardCComponent},
  {path:"editMatch/:id",component: EditMatchComponent},
  {path:"matchInfo/:id",component: MatchinfoComponent},
  {path:"editTeam/:id",component: EditTeamComponent},
  {path:"editPlayer/:id",component: EditPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
