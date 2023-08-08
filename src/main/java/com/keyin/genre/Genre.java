package com.keyin.genre;

import com.keyin.book.*;
import javax.persistence.*;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
@Entity
public class Genre {
    @Id
    @SequenceGenerator(name = "genre_sequence", sequenceName = "genre_sequence", allocationSize = 1, initialValue=1)
    @GeneratedValue(generator = "genre_sequence")
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
