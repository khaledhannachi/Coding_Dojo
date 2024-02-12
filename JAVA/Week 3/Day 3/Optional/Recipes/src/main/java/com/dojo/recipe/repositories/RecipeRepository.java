package com.dojo.recipe.repositories;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import com.dojo.recipe.models.Recipe;


@Repository
public interface RecipeRepository extends ListCrudRepository<Recipe, Long> {

}
