package com.dojo.dojoninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dojo.dojoninjas.models.Dojo;
import com.dojo.dojoninjas.repositories.DojoRepository;
@Service
public class DojoService {
	// Business LOGIC
	// C R U D
	
	// DI
	@Autowired
	private DojoRepository dojoRepo;
	
	// READ ALL
	public List<Dojo> allDojos(){
		return dojoRepo.findAll();
	}
	// CREATE
	public Dojo createDojo(Dojo p) {
		return dojoRepo.save(p);
	}
	// READ ONE
	public Dojo findDojoById(Long id) {
		Optional<Dojo> maybePub = dojoRepo.findById(id);
		if(maybePub.isPresent()) {
			return maybePub.get();
		}else {
			return null;
		}
	}
	// UPDATE
	public Dojo updateDojo(Dojo p) {
		return dojoRepo.save(p);
	}
	
	// DELETE
	public void deleteDojo(Long id) {
		dojoRepo.deleteById(id);
	}
}
