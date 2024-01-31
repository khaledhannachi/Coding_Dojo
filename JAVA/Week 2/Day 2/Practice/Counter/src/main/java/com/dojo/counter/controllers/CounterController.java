package com.dojo.counter.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

//... package and other imports you may have
import jakarta.servlet.http.HttpSession;

@Controller
public class CounterController {
	@GetMapping("/")
	 public String index(HttpSession session){
		 
		// If the count is not already in session
			if (session.getAttribute("count") == null) {
				session.setAttribute("count", 0);
			}
			else {
				session.setAttribute("count", (int) session.getAttribute("count")+1);
			}
			return "index.jsp";
		 
	 }
	@GetMapping("/count")
	 public String visit (HttpSession session){
		
			return "visit.jsp";
		 
	 }
}
