package com.dojo.dojoninjas.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dojo.dojoninjas.models.Dojo;
import com.dojo.dojoninjas.models.Ninja;
import com.dojo.dojoninjas.services.DojoService;
import com.dojo.dojoninjas.services.NinjaService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/dojos")
public class DojoController {

	// DI
	@Autowired
	private DojoService dojoService;
	@Autowired
	private NinjaService ninjaServ;
	// Display Dojo creation form
	@GetMapping("")
	public String allDojos(@ModelAttribute Dojo dojo, Model model) {
		List<Dojo> allDojos = dojoService.allDojos();
		model.addAttribute("dojos",allDojos);

		return "dojo.jsp";
	}
	// create a dojo
	@PostMapping("/process")
	public String processDojo(@Valid @ModelAttribute Dojo dojo, BindingResult result, Model model) {
		if(result.hasErrors()) {
			List<Dojo> alldojos = dojoService.allDojos();
			model.addAttribute("dojos",alldojos);
			return "dojo.jsp";
		}
		// save the dojo to the DB
		dojoService.createDojo(dojo);
		return "redirect:/dojos";
	}

	// show one dojo
	@GetMapping("/{id}")
	public String oneDojo(@PathVariable Long id, Model model) {
		Dojo savedDojo = dojoService.findDojoById(id);
		model.addAttribute("dojo", savedDojo);
		List<Ninja> allNinjas = ninjaServ.allNinjas();
		model.addAttribute("allNinjas",allNinjas);
		return "showone.jsp";
	}
	
	
}
