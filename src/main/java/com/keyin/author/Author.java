package com.keyin.author;

import com.keyin.book.Book;
import javax.persistence.*;
import java.util.List;

@Entity
public class Author {
    @Id
    @SequenceGenerator(name = "author_sequence", sequenceName = "author_sequence", allocationSize = 1, initialValue=1)
    @GeneratedValue(generator = "author_sequence")
    private long id;
    private String name;
    private String dob;
    @OneToMany
    private List<Book> books;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }
    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }
}


