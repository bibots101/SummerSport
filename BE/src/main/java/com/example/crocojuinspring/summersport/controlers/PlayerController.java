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

import com.example.crocojuinspring.summersport.models.PlayerModel;
import com.example.crocojuinspring.summersport.services.PlayerService;

@CrossOrigin("*")
@RequestMapping("api/players")
@RestController
public class PlayerController {

	@Autowired
	private PlayerService playerService;
	
	@PostMapping
	public PlayerModel ajouterPlayer(@RequestBody PlayerModel m) {
		return playerService.addPlayer(m);
	}
	
	@GetMapping
	public List<PlayerModel> recupererAllplayers(){
		return playerService.getAllPlayers();
	}
	
	@GetMapping("/{id}")
	public PlayerModel recupererOnePlayer(@PathVariable Long id) {
		return playerService.getPlayerById(id);
	}
	
	@PutMapping
	public PlayerModel editerPlayer(@RequestBody PlayerModel m) {
		return playerService.updatePlayer(m);
	}
	
	@DeleteMapping("/{id}")
	public void supprimerPlayer(@PathVariable Long id) {
		playerService.deletePlayerById(id);
	}
	
}
