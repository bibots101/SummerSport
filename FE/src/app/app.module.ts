import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NewsInfoComponent } from './components/news-info/news-info.component';
import { ArticleComponent } from './components/article/article.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { PlayersComponent } from './components/players/players.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchesComponent } from './components/matches/matches.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchComponent } from './components/match/match.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { MatchfilterPipe } from './pipes/matchfilter.pipe';
import { DashboardCComponent } from './components/dashboard-c/dashboard-c.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { MatchinfoComponent } from './components/matchinfo/matchinfo.component';
import { AddComponent } from './components/add/add.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    BlogsComponent,
    NewsInfoComponent,
    ArticleComponent,
    AddMatchComponent,
    PlayersComponent,
    MatchesComponent,
    BannerComponent,
    MatchComponent,
    ReversePipe,
    MatchfilterPipe,
    DashboardCComponent,
    MatchesTableComponent,
    EditMatchComponent,
    MatchinfoComponent,
    AddComponent,
    AddTeamComponent,
    AddPlayerComponent,
    TeamsTableComponent,
    EditTeamComponent,
    PlayersTableComponent,
    EditPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //TDF Module
    ReactiveFormsModule, //ReactiveFormModule
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
