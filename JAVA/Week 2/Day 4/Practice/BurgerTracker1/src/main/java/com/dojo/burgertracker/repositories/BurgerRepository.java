package com.dojo.burgertracker.repositories;


import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dojo.burgertracker.models.Burger;



public interface BurgerRepository extends CrudRepository<Burger, Long> {

	// Find ALL BOOKS
	List<Burger> findAll();
}