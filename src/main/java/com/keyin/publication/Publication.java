package com.keyin.publication;

import com.keyin.book.*;
import com.keyin.book.Book;

import javax.persistence.*;
import java.util.List;

@Entity
public class Publication {
    @Id
    @SequenceGenerator(name = "publication_sequence", sequenceName = "publication_sequence", allocationSize = 1, initialValue=1)
    @GeneratedValue(generator = "publication_sequence")
    private long id;
    private String type;
    @OneToMany
    private List<Book> books;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }
}
