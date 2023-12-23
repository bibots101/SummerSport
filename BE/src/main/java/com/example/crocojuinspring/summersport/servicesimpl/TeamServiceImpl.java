package com.example.crocojuinspring.summersport.servicesimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crocojuinspring.summersport.models.TeamModel;
import com.example.crocojuinspring.summersport.respositories.TeamRepository;
import com.example.crocojuinspring.summersport.services.TeamService;

@Service
public class TeamServiceImpl implements TeamService{

	@Autowired
	private TeamRepository teamRepo;

	@Override
	public TeamModel addTeam(TeamModel m) {
		// TODO Auto-generated method stub
		return teamRepo.save(m);
	}

	@Override
	public List<TeamModel> getAllTeam() {
		// TODO Auto-generated method stub
		return teamRepo.findAll();
	}

	@Override
	public TeamModel getTeamById(Long id) {
		// TODO Auto-generated method stub
		Optional<TeamModel> m = teamRepo.findById(id);
		return (m.isPresent() ? m.get() : null);	
	}

	@Override
	public void deleteTeamById(long id) {
		// TODO Auto-generated method stub
		teamRepo.deleteById(id);
	}

	@Override
	public TeamModel updateTeam(TeamModel m) {
		// TODO Auto-generated method stub
		return teamRepo.save(m);
	}
	
}
