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
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
    
@Entity
@Table(name="users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message="Username is required!")
    @Size(min=3, max=30, message="Username must be between 3 and 30 characters")
    private String userName;
    
    @NotEmpty(message="Email is required!")
    @Email(message="Please enter a valid email!")
    private String email;
    
    @NotEmpty(message="Password is required!")
    @Size(min=8, max=128, message="Password must be between 8 and 128 characters")
    private String password;
    
    @Transient
    @NotEmpty(message="Confirm Password is required!")
    @Size(min=8, max=128, message="Confirm Password must be between 8 and 128 characters")
    private String confirm;

	// This will not allow the createdAt column to be updated after creation
	@Column(updatable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdAt;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date updatedAt;

//	1:M
	@OneToMany(mappedBy="user", fetch = FetchType.LAZY)
	private List<Project> userProjects;
	
//	M:M
	 @ManyToMany(fetch = FetchType.LAZY)
	    @JoinTable(
	        name = "project_team", 
	        joinColumns = @JoinColumn(name = "user_id"), 
	        inverseJoinColumns = @JoinColumn(name = "project_id")
	    )
	    private List<Project> projectTeam;
	

//	----- methods ---
// other getters and setters removed for brevity

@PrePersist
protected void onCreate() {
	this.createdAt = new Date();
}

@PreUpdate
protected void onUpdate() {
	this.updatedAt = new Date();
}

public Long getId() {
	return id;
}

public String getUserName() {
	return userName;
}

public String getEmail() {
	return email;
}

public String getPassword() {
	return password;
}

public String getConfirm() {
	return confirm;
}

public Date getCreatedAt() {
	return createdAt;
}

public Date getUpdatedAt() {
	return updatedAt;
}

public List<Project> getUserProjects() {
	return userProjects;
}

public List<Project> getProjectTeam() {
	return projectTeam;
}

public void setId(Long id) {
	this.id = id;
}

public void setUserName(String userName) {
	this.userName = userName;
}

public void setEmail(String email) {
	this.email = email;
}

public void setPassword(String password) {
	this.password = password;
}

public void setConfirm(String confirm) {
	this.confirm = confirm;
}

public void setCreatedAt(Date createdAt) {
	this.createdAt = createdAt;
}

public void setUpdatedAt(Date updatedAt) {
	this.updatedAt = updatedAt;
}

public void setUserProjects(List<Project> userProjects) {
	this.userProjects = userProjects;
}

public void setProjectTeam(List<Project> projectTeam) {
	this.projectTeam = projectTeam;
}



}
    
