package com.dojo.loginregistration.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dojo.loginregistration.models.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

	// Find ALL BOOKS
	List<Book> findAll();
}