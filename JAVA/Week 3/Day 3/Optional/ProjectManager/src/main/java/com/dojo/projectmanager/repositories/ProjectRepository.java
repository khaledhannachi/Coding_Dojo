package com.dojo.projectmanager.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dojo.projectmanager.models.Project;


public interface ProjectRepository extends CrudRepository<Project, Long> {

	// Find ALL BOOKS
	List<Project> findAll();
}