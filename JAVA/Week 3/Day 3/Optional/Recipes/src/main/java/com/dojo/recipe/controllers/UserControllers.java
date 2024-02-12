package com.dojo.recipe.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.dojo.recipe.models.LoginUser;
import com.dojo.recipe.models.Recipe;
import com.dojo.recipe.models.User;
import com.dojo.recipe.services.RecipeService;
import com.dojo.recipe.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class UserControllers {
	  // Add once service is implemented:
    @Autowired
    private UserService userServ;
    @Autowired
    private RecipeService recipeServ;
   
   @GetMapping("/")
   public String index(Model model) {
   
       // Bind empty User and LoginUser objects to the JSP
       // to capture the form input
       model.addAttribute("newUser", new User());
       model.addAttribute("newLogin", new LoginUser());
       return "index.jsp";
   }
   
   @GetMapping("/recipes")
   public String index(Model model,HttpSession session) {
	   
	   // Bind empty User and LoginUser objects to the JSP
	   // to capture the form input
	  Long userId=(Long) session.getAttribute("user_id");
	  User user=userServ.findUserById(userId);
	  model.addAttribute("postedBy",user);
	  
	  List<Recipe> allRecipes = recipeServ.allRecipes();
		model.addAttribute("allRecipes",allRecipes);

	   return "home.jsp";
   }
   
   @PostMapping("/register")
   public String register(@Valid @ModelAttribute("newUser") User newUser, 
           BindingResult result, Model model, HttpSession session) {
       
       // TO-DO Later -- call a register method in the service 
       // to do some extra validations and create a new user!
       userServ.register(newUser, result);
       if(result.hasErrors()) {
           // Be sure to send in the empty LoginUser before 
           // re-rendering the page.
           model.addAttribute("newLogin", new LoginUser());
           return "index.jsp";
       }
       
       // No errors! 
       // TO-DO Later: Store their ID from the DB in session, 
       // in other words, log them in.
       session.setAttribute("user_id", newUser.getId());
       return "redirect:/recipes";
   }
   
   @PostMapping("/login")
   public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
           BindingResult result, Model model, HttpSession session) {
       
       // Add once service is implemented:
        User user = userServ.login(newLogin, result);
   
       if(result.hasErrors()) {
           model.addAttribute("newUser", new User());
           return "index.jsp";
       }
   
       // No errors! 
       // TO-DO Later: Store their ID from the DB in session, 
       // in other words, log them in.
       session.setAttribute("user_id", user.getId());
       return "redirect:/recipes";
   }
   
   @GetMapping("/logout")
   public String logout(HttpSession s) {
   	s.invalidate();
   	return "redirect:/";
   }
}
