package com.keyin.publisher;

import com.keyin.book.*;
import javax.persistence.*;
import java.util.List;

@Entity
public class Publisher {
    @Id
    @SequenceGenerator(name = "publisher_sequence", sequenceName = "publisher_sequence", allocationSize = 1, initialValue=1)
    @GeneratedValue(generator = "publisher_sequence")
    private long id;
    private String name;
    @OneToMany
    //private List<Book> books;

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
/*
    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }
 */
}
