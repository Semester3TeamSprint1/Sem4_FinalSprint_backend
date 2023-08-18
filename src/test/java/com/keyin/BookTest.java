package com.keyin;

import com.keyin.library.Book;
import com.keyin.library.BookRepository;
import com.keyin.library.BookImplementation;
import com.keyin.library.BookService;
import com.keyin.library.LibraryController;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import java.util.ArrayList;

@SpringBootTest
public class BookTest {
    @Mock
    private BookRepository bookRepository;

    @InjectMocks
    private BookImplementation bookService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }
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

        System.out.println(result);

        assertEquals(2,result.size());
        assertEquals(book1,result.get(0));
        assertEquals(book2,result.get(1));
        Assertions.assertNotEquals(3,result.size());
    }
@Test
public void testGetByPublication() {
    List<Book> mockBooks = new ArrayList<>();
    mockBooks.add(new Book(1L, "Twilight", "Stephanie Meyer", "Young Adult", "Little, Brown and Company", "Paperback"));
    mockBooks.add(new Book(2L, "Twilight", "Stephanie Meyer", "Young Adult", "Little, Brown and Company", "Ebook"));
    mockBooks.add(new Book(3L, "To Kill a Mockingbird", "Harper Lee", "Fiction", "HarperCollins", "Paperback"));
    mockBooks.add(new Book(4L, "1984", "George Orwell", "Dystopian", "Penguin Books", "Hardcover"));
    mockBooks.add(new Book(5L, "Pride and Prejudice", "Jane Austen", "Classic", "Vintage Books", "Paperback"));
    mockBooks.add(new Book(6L, "The Great Gatsby", "F. Scott Fitzgerald", "Literary Fiction", "Scribner", "Ebook"));
    mockBooks.add(new Book(7L, "Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "Fantasy", "Scholastic", "Hardcover"));

    String chosenPublication = "Book";

    List<Book> expectedResult = new ArrayList<>();
    for (Book book : mockBooks) {
        if (book.getPublication().equalsIgnoreCase(chosenPublication)) {
            expectedResult.add(book);
        }
    }

    when(bookRepository.findByPublication(chosenPublication)).thenReturn(expectedResult);

    List<Book> result = bookService.getByPublication(chosenPublication);

    System.out.println("Expected Result:");
    for (Book book : expectedResult) {
        System.out.println(book.getId() + " " + book.getTitle());
    }

    System.out.println("Actual Result:");
    for (Book book : result) {
        System.out.println(book.getId() + " " + book.getTitle());
    }

    // Check to see if expected result equals actual result.
    if (expectedResult.isEmpty()) {
        fail("Chosen publication not found in the list.");
    }
    assertEquals(expectedResult, result);
    verify(bookRepository, times(1)).findByPublication(chosenPublication);
}
    @Test
    public void testGetByPublicationWithNoMatch() {
        List<Book> mockBooks = new ArrayList<>();
        mockBooks.add(new Book(1L, "Twilight", "Stephanie Meyer", "Young Adult", "Little, Brown and Company", "Paperback"));
        mockBooks.add(new Book(2L, "Twilight", "Stephanie Meyer", "Young Adult", "Little, Brown and Company", "Ebook"));
        mockBooks.add(new Book(3L, "To Kill a Mockingbird", "Harper Lee", "Fiction", "HarperCollins", "Paperback"));
        mockBooks.add(new Book(4L, "1984", "George Orwell", "Dystopian", "Penguin Books", "Hardcover"));
        mockBooks.add(new Book(5L, "Pride and Prejudice", "Jane Austen", "Classic", "Vintage Books", "Paperback"));
        mockBooks.add(new Book(6L, "The Great Gatsby", "F. Scott Fitzgerald", "Literary Fiction", "Scribner", "Ebook"));
        mockBooks.add(new Book(7L, "Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "Fantasy", "Scholastic", "Hardcover"));

        String chosenPublication = "Audiobook";

        List<Book> expectedResult = new ArrayList<>();


        List<Book> result = bookService.getByPublication(chosenPublication);

        for (Book book : mockBooks) {
            if (book.getPublication().equalsIgnoreCase(chosenPublication)) {
                result.add(book);
            }
        }

        System.out.println("Expected Result (Empty List):");
        for (Book book : expectedResult) {
            System.out.println(book.getId() + " " + book.getTitle());
        }

        System.out.println("Actual Result:");
        for (Book book : result) {
            System.out.println(book.getId() + " " + book.getTitle());
        }

        // Check for to make sure both the expected result and the actual result has no entries.
        assertTrue(expectedResult.size() == 0 && result.size() == 0);
        verify(bookRepository, times(1)).findByPublication(chosenPublication);
    }
    @Test
    public void testGetByAuthor() {
        List<Book> mockBooks = new ArrayList<>();
        mockBooks.add(new Book(1L, "Twilight", "Stephanie Meyer", "Young Adult", "Little, Brown and Company", "Paperback"));
        mockBooks.add(new Book(2L, "Twilight", "Stephanie Meyer", "Young Adult", "Little, Brown and Company", "Ebook"));
        mockBooks.add(new Book(3L, "To Kill a Mockingbird", "Harper Lee", "Fiction", "HarperCollins", "Paperback"));
        mockBooks.add(new Book(4L, "1984", "George Orwell", "Dystopian", "Penguin Books", "Hardcover"));
        mockBooks.add(new Book(5L, "Pride and Prejudice", "Jane Austen", "Classic", "Vintage Books", "Paperback"));
        mockBooks.add(new Book(6L, "The Great Gatsby", "F. Scott Fitzgerald", "Literary Fiction", "Scribner", "Ebook"));
        mockBooks.add(new Book(7L, "Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "Fantasy", "Scholastic", "Hardcover"));

        String chosenAuthor = "F. Scott Fitzgerald";

        List<Book> expectedResult = new ArrayList<>();
        for (Book book : mockBooks) {
            if (book.getAuthor().equalsIgnoreCase(chosenAuthor)) {
                expectedResult.add(book);
            }
        }

        when(bookRepository.findByAuthor(chosenAuthor)).thenReturn(expectedResult);

        List<Book> result = bookService.findBookByAuthor(chosenAuthor);

        System.out.println(result);

        System.out.println("Expected Result:");
        for (Book book : expectedResult) {
            System.out.println(book.getId() + " " + book.getTitle());
        }

        System.out.println("Actual Result:");
        for (Book book : result) {
            System.out.println(book.getId() + " " + book.getTitle());
        }
        if (expectedResult.isEmpty()) {
            fail("Chosen author not found in the list.");
        }
        // Check to see if expected result equals actual result.
        assertEquals(expectedResult, result);
        verify(bookRepository, times(1)).findByAuthor(chosenAuthor);
    }
    @Test
    @DisplayName("Testing Delete By id")
    public void deleteById(){
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

        bookRepository.deleteById(book1.getId());
        verify(bookRepository,times(1)).deleteById(book1.getId());

    }
    @Test
    @DisplayName("Testing Create book")
    public void testCreateBooks(){
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
        Assertions.assertTrue(bookList.contains(book1) && bookList.contains(book2));
    }

}

