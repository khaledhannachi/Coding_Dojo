package com.dojo.projectmanager.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dojo.projectmanager.models.Project;


public interface ProjectRepository extends JpaRepository<Project, Long> {

	// Find ALL BOOKS
	List<Project> findAll();
}