package com.example.crocojuinspring.summersport.services;

import java.util.List;

import com.example.crocojuinspring.summersport.models.PlayerModel;


public interface PlayerService {

	public PlayerModel addPlayer(PlayerModel m);
	
	public List<PlayerModel> getAllPlayers();
	
	public PlayerModel getPlayerById(Long id);
	
	public void deletePlayerById(long id);
	
	public PlayerModel updatePlayer(PlayerModel m);
	
}
