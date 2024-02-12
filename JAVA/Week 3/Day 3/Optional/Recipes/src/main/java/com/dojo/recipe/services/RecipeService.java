package com.dojo.recipe.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.dojo.recipe.models.Recipe;
import com.dojo.recipe.repositories.RecipeRepository;

@Controller
public class RecipeService {
	
	// Business LOGIC
				// C R U D
				
				// DI
				@Autowired
				private RecipeRepository recipeRepo;
				
				// READ ALL
				public List<Recipe> allRecipes(){
					return recipeRepo.findAll();
				}
				
				// CREATE
				public Recipe createRecipe(Recipe b) {
					return recipeRepo.save(b);
				}
				
				
				// READ ONE
				public Recipe findRecipeById(Long id) {
					Optional<Recipe> maybeRecipe = recipeRepo.findById(id);
					if(maybeRecipe.isPresent()) {
						return maybeRecipe.get();
					}else {
						return null;
					}
				}
				
				// UPDATE
				public Recipe updateRecipe(Recipe b) {
					return recipeRepo.save(b);
				}
				
				// DELETE
				public void deleteRecipe(Long id) {
					recipeRepo.deleteById(id);
				}

}
