package com.example.crocojuinspring.summersport.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.crocojuinspring.summersport.models.TeamModel;

@Repository
public interface TeamRepository extends JpaRepository<TeamModel, Long>{

}
