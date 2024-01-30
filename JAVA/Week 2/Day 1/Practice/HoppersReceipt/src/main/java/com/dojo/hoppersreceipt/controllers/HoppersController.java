package com.dojo.hoppersreceipt.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HoppersController {

@GetMapping("/")
public String home(Model myModel) {
	
        String name = "Gold";
        String itemName = "Gold Necklase";
        double price = 1500;
        String description = "Rose Gold";
        String vendor = "Down Town Store";
        myModel.addAttribute("name", name);
        myModel.addAttribute("itemName", itemName);
        myModel.addAttribute("price",price);
        myModel.addAttribute("description",description);
        myModel.addAttribute("vendor",vendor);
        
	return "index";
	}
	
}
