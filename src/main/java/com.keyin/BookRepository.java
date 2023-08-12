package com.keyin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Book getById(Long id);
    List<Book> findByTitle(String title);
    List<Book> findByGenre(String genre);
    List<Book> findByPublisher(String publisher);
    List<Book> findByPublication(String publication);
    List<Book> findByAuthor(String author);
    void deleteById(Long id);
}

