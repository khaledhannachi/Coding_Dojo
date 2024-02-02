package com.dojo.travel.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dojo.travel.models.Travel;
import com.dojo.travel.repositories.TravelRepository;




@Service
public class TravelService {
	// Business LOGIC
	// C R U D
	
	// DI
	@Autowired
	private TravelRepository travelRepo;
	
	// READ ALL
	public List<Travel> allTravels(){
		return travelRepo.findAll();
	}
	
	// CREATE
	public Travel createTravel(Travel b) {
		return travelRepo.save(b);
	}
	
	
	// READ ONE
	public Travel findTravelById(Long id) {
		Optional<Travel> maybeTravel = travelRepo.findById(id);
		if(maybeTravel.isPresent()) {
			return maybeTravel.get();
		}else {
			return null;
		}
	}
	
	// UPDATE
	public Travel updateTravel(Travel b) {
		return travelRepo.save(b);
	}
	
	// DELETE
	public void deleteTravel(Long id) {
		travelRepo.deleteById(id);
	}

}