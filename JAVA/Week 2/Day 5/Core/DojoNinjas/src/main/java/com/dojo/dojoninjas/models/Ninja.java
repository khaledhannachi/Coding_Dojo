package com.dojo.dojoninjas.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

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
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "ninjas")
public class Ninja {

		// MEMBER VARIABLES
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;

		@NotBlank
		@Size(min = 4, max = 100, message = "you need a first name !")
		private String firstname;
		
		@NotBlank
		@Size(min = 4, max = 100, message = "you need a last name !")
		private String lastname;

		@Min(18)
		@Max(150)
		private Integer age;

		// This will not allow the createdAt column to be updated after creation
		@Column(updatable = false)
		@DateTimeFormat(pattern = "yyyy-MM-dd")
		private Date createdAt;
		@DateTimeFormat(pattern = "yyyy-MM-dd")
		private Date updatedAt;

		
		   // M : 1 
		@ManyToOne(fetch = FetchType.LAZY)
		    @JoinColumn(name="dojo_id")
		    private Dojo dojo;
		 
		    public Dojo getDojo() {
				return dojo;
			}
			public void setDojo(Dojo dojo) {
				this.dojo = dojo;
			}
		// zero-args constructor
		public Ninja () {
		}

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

		// GETTERS & SETTERS
		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getFirstname() {
			return firstname;
		}

		public void setFirstname(String firstname) {
			this.firstname = firstname;
		}

		public String getLastname() {
			return lastname;
		}

		public void setLastname(String lastname) {
			this.lastname = lastname;
		}

		public Integer getAge() {
			return age;
		}

		public void setAge(Integer age) {
			this.age = age;
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


