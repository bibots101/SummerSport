package com.example.crocojuinspring.summersport.services;

import java.util.List;

import com.example.crocojuinspring.summersport.models.TeamModel;

public interface TeamService {

	public TeamModel addTeam(TeamModel m);
	
	public List<TeamModel> getAllTeam();
	
	public TeamModel getTeamById(Long id);
	
	public void deleteTeamById(long id);
	
	public TeamModel updateTeam(TeamModel m);
}
