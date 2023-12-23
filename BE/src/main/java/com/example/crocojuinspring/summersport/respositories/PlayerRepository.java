package com.example.crocojuinspring.summersport.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.crocojuinspring.summersport.models.PlayerModel;

@Repository
public interface PlayerRepository extends JpaRepository<PlayerModel, Long>{

}
