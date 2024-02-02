package com.dojo.travel.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dojo.travel.models.Travel;



public interface TravelRepository extends CrudRepository<Travel, Long> {

	// Find ALL BOOKS
	List<Travel> findAll();
}