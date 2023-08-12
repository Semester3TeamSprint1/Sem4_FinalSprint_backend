package com.keyin;

import com.keyin.Book.*; // Assuming you have a Book model class
import com.keyin.BookService; // Assuming you have a BookService class
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
@CrossOrigin // To tell SpringBoot to connect to React.
public class LibraryController {
    @Autowired
    public BookService bookService; // Assuming you have a BookService instance

    @PostMapping("/add")
    public String add(@RequestBody Book book) {
        bookService.saveBook(book);
        return "New book added";
    }

    @GetMapping("/getById/{id}")
    public Book getById(@PathVariable Long id){
        return bookService.getById(id);
    }

    @GetMapping("/getAll")
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/getByTitle/{title}")
    public List<Book> getByTitle(@PathVariable String title) {
        return bookService.getByTitle(title);
    }

    @GetMapping("/getByAuthor/{author}")
    public List<Book> getByAuthor(@PathVariable String author) {
        return bookService.getByAuthor(author);
    }

    @GetMapping("/getByGenre/{genre}")
    public List<Book> getByGenre(@PathVariable String genre) {
        return bookService.getByGenre(genre);
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable Long id, @RequestBody Book book) {
        Book bookToUpdate = bookService.getById(id);
        bookToUpdate.setTitle(book.getTitle());
        bookToUpdate.setAuthor(book.getAuthor());
        bookToUpdate.setGenre(book.getGenre());
        bookService.saveBook(bookToUpdate);
        return "Book updated";
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        bookService.deleteBook(id);
        return "Book deleted";
    }

    @GetMapping ("/getByPublisher/{publisher}")
    public List<Book> getByPublisher(@PathVariable String publisher){
        return bookService.getByPublisher(publisher);
    }
}

