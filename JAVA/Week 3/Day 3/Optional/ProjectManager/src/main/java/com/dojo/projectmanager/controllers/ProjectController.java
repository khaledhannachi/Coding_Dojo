package com.dojo.projectmanager.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dojo.projectmanager.models.Project;
import com.dojo.projectmanager.models.User;
import com.dojo.projectmanager.services.ProjectService;
import com.dojo.projectmanager.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class ProjectController {

	// TODO Route Guard for all routes
	// DI
	@Autowired
	private ProjectService projectServ;
	@Autowired
	private UserService userServ;

	// display all projects
	@GetMapping("/projects")
	public String home(@ModelAttribute("project") Project project, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		// ROUTE GUARD
		if (userId == null) {
			return "redirect:/";
		}

		User loggedUser = userServ.findUserById(userId);
		// retrieve all projects from db
		List<Project> allProjects = projectServ.allProjects();
		model.addAttribute("loggedUser", loggedUser);
		model.addAttribute("allProjects", allProjects);

		return "dashboard.jsp";
	}
	// Display create Form
	@GetMapping("/projects/new")
	public String getMethodName(Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		model.addAttribute("project", new Project());
		return "create.jsp";
	}

	// Process Project
	@PostMapping("/projects/processProject")
	public String createProject(@Valid @ModelAttribute("project") Project project, BindingResult result, Model model,
			HttpSession s) {
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		if (result.hasErrors()) {
			// retrieve all projects from db
//			List<Project> allProjects = projectServ.allProjects();
//			model.addAttribute("allProjects",allProjects);
			return "create.jsp";
		} else {
			// grab the user id from session
			// grab the user by their id
			User user = userServ.findUserById(userId);
			// set the project's author as the current loggedin user(username)
			project.setUser(user);
			
			// make the the team members not null
	        if (project.getTeamMembers() == null) {
	            project.setTeamMembers(new ArrayList<>());
	        }
	        // Add the user to the project's team members
	        project.getTeamMembers().add(user);

			projectServ.createProject(project);
			return "redirect:/projects";
		}
	}
	
	// Show One Project by id
	@GetMapping("/projects/{id}")
	public String getProjectById(Model model, @PathVariable("id") Long id, HttpSession s) {
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		Project selectedProject = projectServ.findProjectById(id);
		model.addAttribute("project", selectedProject);
		return "showOne.jsp";
	}
	// Display Edit Form
	@GetMapping("/projects/edit/{id}")
	public String getMethodName(Model model, @PathVariable("id") Long id, HttpSession s) {
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		// find the project by the id
		Project selectedProject = projectServ.findProjectById(id);
		model.addAttribute("project", selectedProject);
		return "edit.jsp";
	}

	@PutMapping("/projects/{id}")
	public String editProject(@Valid @ModelAttribute("project") Project project, BindingResult result, HttpSession s,
			@PathVariable("id") Long projectId) {
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		if (result.hasErrors()) {
			return "edit.jsp";
		} else {
			// if there are no errors save the updated project to DB
			// grab the user id from session
			// grab the user by their id
			User newUser = userServ.findUserById(userId);
			// set the author as the current logged-in user
			project.setUser(newUser);
			// Grab the old user
			Project oldProject = projectServ.findProjectById(projectId);
	
			// set old user to the edited project
			
			project.setUser(oldProject.getUser());
			  
			// make the the team members not null
	        if (project.getTeamMembers() == null) {
	            project.setTeamMembers(new ArrayList<>());
	        }
	        // Add the user to the project's team members
	        project.getTeamMembers().add(newUser);
	        
			projectServ.updateProject(project);
			return "redirect:/projects";
		}
	}

	// Delete One Project by id

	@DeleteMapping("/projects/{id}")
	public String deleteProject(@PathVariable("id") Long id, HttpSession s) {
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}

		projectServ.deleteProject(id);

		return "redirect:/projects";
	}

//	Many toMany join Team 
	@GetMapping("/projects/addtoteam/{id}")
	
	public String addToTeam(@PathVariable("id") Long id, HttpSession session) {
//	1. grab the current loggedin user
	Long userId = (Long) session.getAttribute("user_id");
	if (userId == null) {
		return "redirect:/";
	}
	User currentMember = userServ.findUserById(userId);
//	2.add the user to list
	Project selectedProject = projectServ.findProjectById(id);
	selectedProject.getTeamMembers().add(currentMember);
//	3.Add to DB
	projectServ.updateProject(selectedProject);
	return "redirect:/projects";
	 
	}
	
	@GetMapping("/projects/removeFromteam/{id}")
	public String removeFromTeam(@PathVariable("id") Long id, HttpSession session) {
//	1. grab the current loggedin user
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		User currentMember = userServ.findUserById(userId);
//	2.remove  the user to list
		Project selectedProject = projectServ.findProjectById(id);
		selectedProject.getTeamMembers().remove(currentMember);
//	3.Add to DB
		projectServ.updateProject(selectedProject);
		return "redirect:/projects";
		
	}

}
