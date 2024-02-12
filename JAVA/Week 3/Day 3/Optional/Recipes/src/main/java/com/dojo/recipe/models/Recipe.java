package com.dojo.recipe.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.dojo.bookclub.models.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="recipes")
public class Recipe {
	
	// MEMBER VARIABLES
			@Id
			@GeneratedValue(strategy = GenerationType.IDENTITY)
			private Long id;

			@NotBlank(message = "name is required!")
			@Size(min = 3, max = 30, message = "name must be between 3 and 30 characters")
			private String name;
			
			
			@NotBlank(message = "Image is required!")
			@Size(min = 3, message = "Enter a valid path")
			private String image;
			
			
			@NotBlank(message = "description is required!")
			@Size(min = 3, message = "description must be between 3 and 30 characters")
			private String description;

			
			
			// This will not allow the createdAt column to be updated after creation
			@Column(updatable = false)
			@DateTimeFormat(pattern = "yyyy-MM-dd")
			private Date createdAt;
			
			@DateTimeFormat(pattern = "yyyy-MM-dd")
			private Date updatedAt;
			
//			----- methods ---
			// other getters and setters removed for brevity
			@PrePersist
			protected void onCreate() {
				this.createdAt = new Date();
			}

			@PreUpdate
			protected void onUpdate() {
				this.updatedAt = new Date();
			}
			//	constructor zero constructor		
			public Recipe() {
				
			}
			
			//many to one
			@ManyToOne(fetch=FetchType.LAZY)
			@JoinColumn(name="user_id")
			private User postedBy;
			
			
			//GETTERS AND SETTERS		

			public User getPostedBy() {
				return postedBy;
			}

			public void setPostedBy(User postedBy) {
				this.postedBy = postedBy;
			}

			public Long getId() {
				return id;
			}

			public void setId(Long id) {
				this.id = id;
			}

			public String getName() {
				return name;
			}

			public void setName(String name) {
				this.name = name;
			}

			public String getImage() {
				return image;
			}

			public void setImage(String image) {
				this.image = image;
			}

			public String getDescription() {
				return description;
			}

			public void setDescription(String description) {
				this.description = description;
			}

			public Date getCreatedAt() {
				return createdAt;
			}

			public void setCreatedAt(Date createdAt) {
				this.createdAt = createdAt;
			}

			public Date getUpdatedAt() {
				return updatedAt;
			}

			public void setUpdatedAt(Date updatedAt) {
				this.updatedAt = updatedAt;
			}
			
			

}
