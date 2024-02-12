package com.dojo.recipe.controllers;

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

import com.dojo.recipe.models.Recipe;
import com.dojo.recipe.models.User;
import com.dojo.recipe.services.RecipeService;
import com.dojo.recipe.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("recipes")
public class RecipeController {
	
	// DI
				@Autowired
				private RecipeService recipeServ;
				 @Autowired
				 private UserService userServ;
				// display all recipes
//				@GetMapping("")
//				public String home( Model model,HttpSession session) {
//					// retrieve all recipes from db
//					List<Recipe> allRecipes = recipeServ.allRecipes();
//					model.addAttribute("allRecipes",allRecipes);
//					Long userId=(Long) session.getAttribute("user_id");
//					  User user=userServ.findUserById(userId);
//					  model.addAttribute("user",user);
//					return "home.jsp";
//				}
				//display one recipe
				@GetMapping("/{id}")
				public String findOneRecipeById(@PathVariable("id") Long id, Model model) {
					Recipe selectedRecipe = recipeServ.findRecipeById(id);
					model.addAttribute("recipe",selectedRecipe);
					return "show.jsp";
				}
				
				@GetMapping("/new")
				public String displayForm(@ModelAttribute("recipe") Recipe recipe) {
					return "form.jsp";
				}
				
				// Process Recipe
				@PostMapping("/process")
				public String createRecipe(@Valid @ModelAttribute("recipe") Recipe recipe,
						BindingResult result,HttpSession session,
						Model model) {
					if (result.hasErrors()) {
						// retrieve all recipes from db
						List<Recipe> allRecipes = recipeServ.allRecipes();
						model.addAttribute("allRecipes",allRecipes);
						return "home.jsp";
					}else {
						// grab the user id from session
						Long userId = (Long) session.getAttribute("user_id");
						// grab the user by their id
						User user = userServ.findUserById(userId);
						// set the recipe's author as the current loggedin user(username)
						recipe.setPostedBy(user);
						Recipe newRecipe = recipeServ.createRecipe(recipe);
						return "redirect:/recipes";
					}
					
				}
				
				@DeleteMapping("/{id}")
				public String deleteRecipe(@PathVariable("id") Long id) {
					
					recipeServ.deleteRecipe(id);
					
					return "redirect:/recipes";
				}
				
				
				// Display Edit Form
				
				@GetMapping("/edit/{id}")
				public String getMethodName(Model model, @PathVariable("id") Long id) {
					// find the recipe by the id
					Recipe selectedRecipe = recipeServ.findRecipeById(id);
					model.addAttribute("recipe",selectedRecipe);
					return "edit.jsp";
				}
				
				@PutMapping("/{id}")
				public String editRecipe(@Valid @ModelAttribute("recipe") Recipe recipe, BindingResult result,HttpSession session) {
					
					if(result.hasErrors()) {
						return "edit.jsp";
					}else {
						// grab the user id from session
						Long userId = (Long) session.getAttribute("user_id");
						// grab the user by their id
						User user = userServ.findUserById(userId);
						// set the recipe's author as the current loggedin user(username)
						recipe.setPostedBy(user);
						// if there are no errors save the updated recipe to DB
						recipeServ.updateRecipe(recipe);
					
						return "redirect:/recipes";
					}
				}


}
