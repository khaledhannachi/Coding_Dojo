package com.dojo.renderingbooks.controllers;

import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dojo.renderingbooks.models.Book;
import com.dojo.renderingbooks.resources.BookService;

@Controller
@RequestMapping("/books")
public class BookViewController {

private final BookService bookService;
	
    public BookViewController(BookService bookService){
        this.bookService = bookService;
    }
    
	@GetMapping("")
	public String getAllBook(Model model){
		
		List<Book> allBooks = bookService.allBooks();
		model.addAttribute("allBooks",allBooks);
		return "home.jsp";
	}
	
	@GetMapping("/create")
	public String displayForm(){
		
		return "form.jsp";
	}
	

	@PostMapping("/processBook")
	public String create(@RequestParam(value = "title") String title, 
			@RequestParam(value = "description") String description,
			@RequestParam(value = "language") String language, 
			@RequestParam(value = "numOfPages") Integer numOfPages) {
		
		Book newBook = new Book(title, description, language, numOfPages );
		bookService.createBook(newBook);
		return "redirect:/books";
	}
	
	@GetMapping("/{id}")
	public String findOneBookById(@PathVariable("id") Long id, Model model) {
		Book selectedBook = bookService.findBook(id);
		model.addAttribute("book",selectedBook);
		return "showOne.jsp";
	}
}