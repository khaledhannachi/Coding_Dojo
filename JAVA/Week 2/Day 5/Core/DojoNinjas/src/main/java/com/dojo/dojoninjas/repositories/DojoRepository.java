package com.dojo.dojoninjas.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dojo.dojoninjas.models.Dojo;

public interface DojoRepository extends CrudRepository<Dojo, Long> {

	// Find ALL Dojos
	List<Dojo> findAll();
}