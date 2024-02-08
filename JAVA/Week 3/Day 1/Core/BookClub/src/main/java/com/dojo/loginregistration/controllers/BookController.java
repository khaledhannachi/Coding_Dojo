package com.dojo.loginregistration.controllers;

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

import com.dojo.loginregistration.models.Book;
import com.dojo.loginregistration.models.User;
import com.dojo.loginregistration.services.BookService;
import com.dojo.loginregistration.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/books")
public class BookController {

	//TODO Route Guard for all routes
	// DI
	@Autowired
	private BookService bookServ;
	@Autowired
	private UserService userServ;
	
	// display all books
	@GetMapping("")
	public String home(@ModelAttribute("book") Book book,
			Model model,
			HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		// ROUTE GUARD
		if(userId == null) {
			return "redirect:/";
		}
		
		User loggedUser = userServ.findUserById(userId);
		// retrieve all books from db
		List<Book> allBooks = bookServ.allBooks();
		model.addAttribute("loggedUser",loggedUser);
		model.addAttribute("allBooks",allBooks);
//		// retrieve all publishers from db
//		List<Publisher> allPublishers = pubServ.allPubs();
//		model.addAttribute("publishers", allPublishers);
		return "dashboard.jsp";
	}
	// Display Edit Form
	
		@GetMapping("/new")
		public String getMethodName(Model model) {
			model.addAttribute("book",new Book());
			return "create.jsp";
		}
	
	// Process Book
	@PostMapping("/processBook")
	public String createBook(@Valid @ModelAttribute("book") Book book,
			BindingResult result,
			Model model,
			HttpSession s) {
		if (result.hasErrors()) {
			// retrieve all books from db
//			List<Book> allBooks = bookServ.allBooks();
//			model.addAttribute("allBooks",allBooks);

			return "dashboard.jsp";
		}else {
			// grab the user id from session
			Long userId = (Long) s.getAttribute("user_id");
			// grab the user by their id
			User user = userServ.findUserById(userId);
			// set the book's author as the current loggedin user(username)
			book.setUser(user);
			bookServ.createBook(book);
			return "redirect:/books";
		}
		
	}
	
	@DeleteMapping("/{id}")
	public String deleteBook(@PathVariable("id") Long id) {
		
		bookServ.deleteBook(id);
		
		return "redirect:/books";
	}
	
	
	// Show One Book by id
	@GetMapping("/{id}")
	public String getBookById(Model model, @PathVariable("id") Long id) {
		
		Book selectedBook = bookServ.findBookById(id);
		model.addAttribute("book", selectedBook);
		return "showOne.jsp";
	}
	
	

	// Display Edit Form
	
	@GetMapping("/edit/{id}")
	public String getMethodName(Model model, @PathVariable("id") Long id) {
		// find the book by the id
		Book selectedBook = bookServ.findBookById(id);
		model.addAttribute("book",selectedBook);
		return "edit.jsp";
	}
	
	@PutMapping("/{id}")
	public String editBook(@Valid @ModelAttribute("book") Book book,
			BindingResult result,
			HttpSession s,
			@PathVariable("id") Long bookId) {
		
		if(result.hasErrors()) {
			return "edit.jsp";
		}else {
			// if there are no errors save the updated book to DB
			// grab the user id from session
			Long userId = (Long) s.getAttribute("user_id");
			// grab the user by their id
			User newUser = userServ.findUserById(userId);
			// set the author as the current logged-in user
			book.setUser(newUser);
			// Grab the old publisher
			Book oldBook = bookServ.findBookById(bookId);
			// set old publisher to the edited book
			book.setUser(oldBook.getUser());
			bookServ.updateBook(book);
			return "redirect:/books";
		}
	}
	
	
	

}