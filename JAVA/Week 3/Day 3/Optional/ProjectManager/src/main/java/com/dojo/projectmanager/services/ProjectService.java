package com.dojo.projectmanager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dojo.projectmanager.models.Project;
import com.dojo.projectmanager.repositories.ProjectRepository;


@Service
public class ProjectService {
	// Business LOGIC
		// C R U D
		
		// DI
		@Autowired
		private ProjectRepository projectRepo;
		
		// READ ALL
		public List<Project> allProjects(){
			return projectRepo.findAll();
		}
		
		// CREATE
		public Project createProject(Project b) {
			return projectRepo.save(b);
		}
		
		
		// READ ONE
		public Project findProjectById(Long id) {
			Optional<Project> maybeProject = projectRepo.findById(id);
			if(maybeProject.isPresent()) {
				return maybeProject.get();
			}else {
				return null;
			}
		}
		
		// UPDATE
		public Project updateProject(Project b) {
			return projectRepo.save(b);
		}
		
		// DELETE
		public void deleteProject(Long id) {
			projectRepo.deleteById(id);
		}
		
		
		
		
		
		
}
