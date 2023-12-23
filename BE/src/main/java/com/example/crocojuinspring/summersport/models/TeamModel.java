package com.example.crocojuinspring.summersport.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="team")
public class TeamModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "TEAM_ID")
	private long id;
	private String name;
	private long foundation;
	private String stadium;
	
	public TeamModel() {
		// TODO Auto-generated constructor stub
	}
	
	public TeamModel(long id, String name, long foundation, String stadium) {
		this.id = id;
		this.name = name;
		this.foundation = foundation;
		this.stadium = stadium;
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getFoundation() {
		return foundation;
	}

	public void setFoundation(long foundation) {
		this.foundation = foundation;
	}

	public String getStadium() {
		return stadium;
	}

	public void setStadium(String stadium) {
		this.stadium = stadium;
	}

	@Override
	public String toString() {
		return "TeamModel [id=" + id + ", name=" + name + ", foundation=" + foundation + ", stadium=" + stadium + "]";
	}
	
	
	
	
}
