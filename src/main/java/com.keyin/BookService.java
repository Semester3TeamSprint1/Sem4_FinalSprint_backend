package com.keyin;

import java.util.List;

public interface BookService {
    Book saveBook(Book book);
    List<Book> getAllBooks();
    Book getById(Long id);
    List<Book> getByTitle(String title);
    List<Book> getByAuthor(String author);
    List<Book> getByGenre(String genre);
    List<Book> getByPublisher(String publisher);

    List<Book> getByPublication(String publication);

    Book updateBook(Book book);
    void deleteBook(Long id);
    void deleteBooksByAuthor(String author);
    void deleteBooksByGenre(String genre);
    void deleteBooksByPublisher(String publisher);
}
