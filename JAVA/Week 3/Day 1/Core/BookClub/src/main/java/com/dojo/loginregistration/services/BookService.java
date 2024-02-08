package com.dojo.loginregistration.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dojo.loginregistration.models.Book;
import com.dojo.loginregistration.repositories.BookRepository;

@Service
public class BookService {
	// Business LOGIC
	// C R U D
	
	// DI
	@Autowired
	private BookRepository bookRepo;
	
	// READ ALL
	public List<Book> allBooks(){
		return bookRepo.findAll();
	}
	
	// CREATE
	public Book createBook(Book b) {
		return bookRepo.save(b);
	}
	
	
	// READ ONE
	public Book findBookById(Long id) {
		Optional<Book> maybeBook = bookRepo.findById(id);
		if(maybeBook.isPresent()) {
			return maybeBook.get();
		}else {
			return null;
		}
	}
	
	// UPDATE
	public Book updateBook(Book b) {
		return bookRepo.save(b);
	}
	
	// DELETE
	public void deleteBook(Long id) {
		bookRepo.deleteById(id);
	}
	
	
	
	
	
	
	
	
	
	
}