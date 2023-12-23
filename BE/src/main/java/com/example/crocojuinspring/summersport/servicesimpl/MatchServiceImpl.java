package com.example.crocojuinspring.summersport.servicesimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crocojuinspring.summersport.models.MatchModel;
import com.example.crocojuinspring.summersport.respositories.MatchRepository;
import com.example.crocojuinspring.summersport.services.MatchService;

@Service
public class MatchServiceImpl implements MatchService {

	@Autowired
	private MatchRepository matchRepo;
	
	@Override
	public MatchModel addMatch(MatchModel m) {
		// TODO Auto-generated method stub
		return matchRepo.save(m);
	}

	@Override
	public List<MatchModel> getAllMatches() {
		// TODO Auto-generated method stub
		return matchRepo.findAll();
	}
	
	@Override
	public MatchModel getMatchById(Long id) {
		// TODO Auto-generated method stub
		Optional<MatchModel> m = matchRepo.findById(id);
		return (m.isPresent() ? m.get() : null);
	}

	@Override
	public void deleteMatchById(long id) {
		// TODO Auto-generated method stub
		matchRepo.deleteById(id);
		
	}

	@Override
	public MatchModel updateMatch(MatchModel m) {
		// TODO Auto-generated method stub
		return matchRepo.save(m);
	}

}
