package com.dojo.dojoninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dojo.dojoninjas.models.Ninja;
import com.dojo.dojoninjas.repositories.NinjaRepository;
@Service
public class NinjaService {
	
	// Business LOGIC
	// C R U D
	// DI
	@Autowired
	private NinjaRepository ninjaRepo;
	
	// READ ALL
	public List<Ninja> allNinjas(){
		return ninjaRepo.findAll();
	}
	// CREATE
	public Ninja createNinja(Ninja b) {
		return ninjaRepo.save(b);
	}
	// READ ONE
	public Ninja findNinjaById(Long id) {
		Optional<Ninja> maybeNinja = ninjaRepo.findById(id);
		if(maybeNinja.isPresent()) {
			return maybeNinja.get();
		}else {
			return null;
		}
	}
	// UPDATE
	public Ninja updateNinja(Ninja b) {
		return ninjaRepo.save(b);
	}
	
	}
	
	
	
	
	
	
