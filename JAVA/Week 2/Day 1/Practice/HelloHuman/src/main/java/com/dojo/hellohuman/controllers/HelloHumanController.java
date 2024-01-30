package com.dojo.hellohuman.controllers;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloHumanController {
@GetMapping ("")
public String helloHuman () {
	return "Hello Human";
}

@GetMapping ("/search")
public String inputName (@RequestParam(value="name", required = false) String HumanName, 
		@RequestParam(value="last_name", required = false) String HumanLastName  ) {
	return "Hello " + HumanName +" "+ HumanLastName ;
}



	
}
