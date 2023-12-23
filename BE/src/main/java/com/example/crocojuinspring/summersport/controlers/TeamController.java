package com.example.crocojuinspring.summersport.controlers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crocojuinspring.summersport.models.TeamModel;
import com.example.crocojuinspring.summersport.services.TeamService;

@CrossOrigin("*")
@RequestMapping("api/teams")
@RestController
public class TeamController {
	@Autowired
	private TeamService teamService;
	
	@PostMapping
	public TeamModel ajouterTeam(@RequestBody TeamModel m) {
		return teamService.addTeam(m);
	}
	
	@GetMapping
	public List<TeamModel> recupererAllTeams(){
		return teamService.getAllTeam();
	}
	
	@GetMapping("/{id}")
	public TeamModel recupererOneTeam(@PathVariable Long id) {
		return teamService.getTeamById(id);
	}
	
	@PutMapping
	public TeamModel editerTeam(@RequestBody TeamModel m) {
		return teamService.updateTeam(m);
	}
	
	@DeleteMapping("/{id}")
	public void supprimerTeam(@PathVariable Long id) {
		teamService.deleteTeamById(id);
	}

}
