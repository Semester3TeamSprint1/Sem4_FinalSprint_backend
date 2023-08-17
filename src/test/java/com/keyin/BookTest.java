package com.keyin;

import com.keyin.library.Book;
import com.keyin.library.BookRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

@SpringBootTest
public class BookTest {
    @Mock
    private BookRepository bookRepository;
    @Test
    @DisplayName("Test For Finding all Books")
    public void testFindAllBooks(){
        Book book1 = new Book();
        book1.setId(1L);
        book1.setAuthor("Paulo Coelho");
        book1.setGenre("Fiction");
        book1.setPublication("Ebook");
        book1.setPublisher("HarperOne");
        book1.setTitle("The Alchemist");

        Book book2 = new Book();
        book2.setId(2L);
        book2.setAuthor("George Orwell");
        book2.setGenre("Dystopian");
        book2.setPublication("Ebook");
        book2.setPublisher("Signet Classics");
        book2.setTitle("1984");

        List<Book> bookList = Arrays.asList(book1,book2);
        when(bookRepository.findAll()).thenReturn(bookList);
        List<Book> result = bookRepository.findAll();

        Assertions.assertEquals(2,result.size());
        Assertions.assertEquals(book1,result.get(0));
        Assertions.assertEquals(book2,result.get(1));
        Assertions.assertNotEquals(3,result.size());
    }
//    @Test
//    @DisplayName("Test For Finding Books By id")
//    public void testFindByID(){
//        Book book1 = new Book();
//        book1.setId(1L);
//        book1.setAuthor("Paulo Coelho");
//        book1.setGenre("Fiction");
//        book1.setPublication("Ebook");
//        book1.setPublisher("HarperOne");
//        book1.setTitle("The Alchemist");
//        List<Book> bookList = Arrays.asList(book1);
//        when(bookRepository.findByTitle(book1.getTitle())).thenReturn(bookList);
//        List<Book> result = bookRepository.findByTitle(book1.getTitle());


}
