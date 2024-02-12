package com.dojo.projectmanager.models;

import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
@Entity
@Table(name="projects")
public class Project {
	// MEMBER VARIABLES
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
		
		@NotBlank
		@Size(min = 5, max = 200, message ="you need a title !")
		private String title;
		
		@NotBlank
		@Size(min = 4, max = 100, message ="you need an author !")
		private String description;
		
		@NotNull
		@Future(message ="The date must be in the future !")
		@DateTimeFormat(pattern="yyyy-MM-dd")
		private Date duedate;
		

		// This will not allow the createdAt column to be updated after creation
	    @Column(updatable=false)
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date createdAt;
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date updatedAt;
	    
	    
	    // M:1
	    @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name="user_id")
	    private User user;

//		M:M
		 @ManyToMany(fetch = FetchType.LAZY)
		    @JoinTable(
		        name = "project_team", 
		        joinColumns = @JoinColumn(name = "project_id"), 
		        inverseJoinColumns = @JoinColumn(name = "user_id")
		    )
		    private List<User> teamMembers;

		 
		// zero-args constructor
	    public Project() {
		
		}
	    
//		----- methods ---
	  
	    @PrePersist
	    protected void onCreate(){
	        this.createdAt = new Date();
	    }
	    @PreUpdate
	    protected void onUpdate(){
	        this.updatedAt = new Date();
	    }
	 // other getters and setters removed for brevity
		public Long getId() {
			return id;
		}

		public String getTitle() {
			return title;
		}

		public String getDescription() {
			return description;
		}

		public Date getDuedate() {
			return duedate;
		}

		public Date getCreatedAt() {
			return createdAt;
		}

		public Date getUpdatedAt() {
			return updatedAt;
		}

		public User getUser() {
			return user;
		}

		public List<User> getTeamMembers() {
			return teamMembers;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public void setDuedate(Date duedate) {
			this.duedate = duedate;
		}

		public void setCreatedAt(Date createdAt) {
			this.createdAt = createdAt;
		}

		public void setUpdatedAt(Date updatedAt) {
			this.updatedAt = updatedAt;
		}

		public void setUser(User user) {
			this.user = user;
		}

		public void setTeamMembers(List<User> teamMembers) {
			this.teamMembers = teamMembers;
		}
	    

		
	    
}
