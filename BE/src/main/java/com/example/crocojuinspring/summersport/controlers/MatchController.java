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

import com.example.crocojuinspring.summersport.models.MatchModel;
import com.example.crocojuinspring.summersport.services.MatchService;

@CrossOrigin("*")
@RequestMapping("api/matches")
@RestController
public class MatchController {

	@Autowired
	public MatchService matchService;
	
	@PostMapping
	public MatchModel ajouterMatch(@RequestBody MatchModel m) {
		return matchService.addMatch(m);
		
	}
	
	@GetMapping
	public List<MatchModel> recupererAllMatches(){
		return matchService.getAllMatches();
	}
	
	@GetMapping("/{id}")
	public MatchModel recupererOneMatch(@PathVariable Long id) {
		return matchService.getMatchById(id);
	}
	
	@PutMapping
	public MatchModel editerMatch(@RequestBody MatchModel m) {
		return matchService.updateMatch(m);
	}
	
	@DeleteMapping("/{id}")
	public void supprimerMatch(@PathVariable Long id) {
		matchService.deleteMatchById(id);
	}

}
