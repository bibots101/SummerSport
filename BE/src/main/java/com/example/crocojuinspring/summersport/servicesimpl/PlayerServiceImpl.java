	package com.example.crocojuinspring.summersport.servicesimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crocojuinspring.summersport.models.PlayerModel;
import com.example.crocojuinspring.summersport.respositories.PlayerRepository;
import com.example.crocojuinspring.summersport.services.PlayerService;

@Service
public class PlayerServiceImpl implements PlayerService{
	@Autowired
	private PlayerRepository playerRepo;

	@Override
	public PlayerModel addPlayer(PlayerModel m) {
		// TODO Auto-generated method stub
		return playerRepo.save(m);
	}

	@Override
	public List<PlayerModel> getAllPlayers() {
		// TODO Auto-generated method stub
		return playerRepo.findAll();
	}

	@Override
	public PlayerModel getPlayerById(Long id) {
		// TODO Auto-generated method stub
		Optional<PlayerModel> m = playerRepo.findById(id);
		return (m.isPresent() ? m.get() : null);
	}

	@Override
	public void deletePlayerById(long id) {
		// TODO Auto-generated method stub
		playerRepo.deleteById(id);

	}

	@Override
	public PlayerModel updatePlayer(PlayerModel m) {
		// TODO Auto-generated method stub
		return playerRepo.save(m);
	}
	
	
	
}
