package com.dojo.dojoninjas.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dojo.dojoninjas.models.Ninja;


public interface NinjaRepository extends CrudRepository<Ninja, Long> {

	// Find ALL BOOKS
	List<Ninja> findAll();
}