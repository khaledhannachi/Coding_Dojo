package com.dojo.burgertracker.controllers;

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
import jakarta.validation.Valid;
import com.dojo.burgertracker.models.Burger;
import com.dojo.burgertracker.services.BurgerService;

@Controller
@RequestMapping("/burgers")
public class BurgerController {
	// DI
	@Autowired
	private BurgerService burgerServ;

	// display all burgers
	@GetMapping("")
	public String home(@ModelAttribute("burger") Burger burger, Model model) {
		// retrieve all burgers from db
		List<Burger> allBurgers = burgerServ.allBurgers();
		model.addAttribute("allBurgers",allBurgers);
		return "home.jsp";
	}

	// Process Burger
	@PostMapping("/processBurger")
	public String createBurger(@Valid @ModelAttribute("burger") Burger burger,
			BindingResult result,
			Model model) {
		if (result.hasErrors()) {
			// retrieve all burgers from db
			List<Burger> allBurgers = burgerServ.allBurgers();
			model.addAttribute("allBurgers",allBurgers);
			return "home.jsp";
		}else {
			Burger newBurger = burgerServ.createBurger(burger);
			return "redirect:/burgers";
		}
		
	}
	
	@DeleteMapping("/{id}")
	public String deleteBurger(@PathVariable("id") Long id) {
		
		burgerServ.deleteBurger(id);
		
		return "redirect:/burgers";
	}
	
	
	// Display Edit Form
	
	@GetMapping("/edit/{id}")
	public String getMethodName(Model model, @PathVariable("id") Long id) {
		// find the burger by the id
		Burger selectedBurger = burgerServ.findBurgerById(id);
		model.addAttribute("burger",selectedBurger);
		return "edit.jsp";
	}
	
	@PutMapping("/{id}")
	public String editBurger(@Valid @ModelAttribute("burger") Burger burger, BindingResult result) {
		
		if(result.hasErrors()) {
			return "edit.jsp";
		}else {
			// if there are no errors save the updated burger to DB
			burgerServ.updateBurger(burger);
		
			return "redirect:/burgers";
		}
	}
	
	
	

}