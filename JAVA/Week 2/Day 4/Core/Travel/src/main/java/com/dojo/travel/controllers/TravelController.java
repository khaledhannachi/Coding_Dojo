package com.dojo.travel.controllers;


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

import com.dojo.travel.models.Travel;
import com.dojo.travel.services.TravelService;

import jakarta.validation.Valid;


@Controller
@RequestMapping("/travels")
public class TravelController {
	// DI
	@Autowired
	private TravelService travelServ;

	// display all travels
	@GetMapping("")
	public String home(@ModelAttribute("travel") Travel travel, Model model) {
		// retrieve all travels from db
		List<Travel> allTravels = travelServ.allTravels();
		model.addAttribute("allTravels",allTravels);
		return "home.jsp";
	}

	// Process Travel
	@PostMapping("/processTravel")
	public String createTravel(@Valid @ModelAttribute("travel") Travel travel,
			BindingResult result,
			Model model) {
		if (result.hasErrors()) {
			// retrieve all travels from db
			List<Travel> allTravels = travelServ.allTravels();
			model.addAttribute("allTravels",allTravels);
			return "home.jsp";
		}else {
			Travel newTravel = travelServ.createTravel(travel);
			return "redirect:/travels";
		}
		
	}
	
	@DeleteMapping("/{id}")
	public String deleteTravel(@PathVariable("id") Long id) {
		
		travelServ.deleteTravel(id);
		
		return "redirect:/travels";
	}
	
	
	// Display Edit Form
	
	@GetMapping("/edit/{id}")
	public String getMethodName(Model model, @PathVariable("id") Long id) {
		// find the travel by the id
		Travel selectedTravel = travelServ.findTravelById(id)  ;
		model.addAttribute("travel",selectedTravel);
		return "edit.jsp";
	}
	
	@PutMapping("/{id}")
	public String editTravel(@Valid @ModelAttribute("travel") Travel travel, BindingResult result) {
		
		if(result.hasErrors()) {
			return "edit.jsp";
		}else {
			// if there are no errors save the updated travel to DB
			travelServ.updateTravel(travel);
		
			return "redirect:/travels";
		}
	}
	
	
	

}