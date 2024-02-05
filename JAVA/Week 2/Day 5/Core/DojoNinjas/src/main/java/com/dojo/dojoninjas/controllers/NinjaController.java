package com.dojo.dojoninjas.controllers;
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
import com.dojo.dojoninjas.models.Dojo;
import com.dojo.dojoninjas.models.Ninja;
import com.dojo.dojoninjas.services.DojoService;
import com.dojo.dojoninjas.services.NinjaService;

import jakarta.validation.Valid;
@Controller
@RequestMapping("/ninjas")
public class NinjaController {

	// DI
	@Autowired
	private NinjaService ninjaServ;
	@Autowired
	private DojoService dojoServ;
	// display all ninjas
	@GetMapping("")
	public String home(@ModelAttribute("ninja") Ninja ninja, Model model) {
		// retrieve all ninjas from db
		List<Ninja> allNinjas = ninjaServ.allNinjas();
		model.addAttribute("allNinjas",allNinjas);
		// retrieve all publishers from db
		List<Dojo> allDojos = dojoServ.allDojos();
		model.addAttribute("dojos", allDojos);
		return "home.jsp";
	}
	// Display Ninja creation form
		@GetMapping("/new")
		public String allNinjas(@ModelAttribute Ninja ninja, Model model) {
			List<Ninja> allNinjas = ninjaServ.allNinjas();
			model.addAttribute("ninjas",allNinjas);
			List<Dojo> allDojos = dojoServ.allDojos();
			model.addAttribute("dojos", allDojos);
			return "ninja.jsp";
		}	
	// Process Ninja
	@PostMapping("/new/process")
	public String createNinja(@Valid @ModelAttribute("ninja") Ninja ninja,
			BindingResult result,
			Model model) {
		if (result.hasErrors()) {
			// retrieve all ninjas from db
			List<Ninja> allNinjas = ninjaServ.allNinjas();
			model.addAttribute("allNinjas",allNinjas);
			// retrieve all dojos from db
			List<Dojo> allDojos = dojoServ.allDojos();
			model.addAttribute("dojos", allDojos);
			return "ninja.jsp";
		}else {
			Ninja newNinja = ninjaServ.createNinja(ninja);
			return "redirect:/ninjas/new";
		}
	}
	
	
	
	
	

}