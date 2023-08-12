package com.keyin.book;

import com.keyin.author.Author;
import com.keyin.genre.Genre;
import com.keyin.publication.Publication;
import com.keyin.publisher.Publisher;
import com.keyin.publisher.*;
import com.keyin.publication.*;

import javax.persistence.*;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
@Entity
public class Book {
    @Id
    @SequenceGenerator(name = "book_sequence", sequenceName = "book_sequence", allocationSize = 1, initialValue=1)
    @GeneratedValue(generator = "book_sequence")
    private long id;
    private String title;
    private String datePublished;
    @ManyToMany(cascade = CascadeType.PERSIST) //Not sure if this is correct.
    @JoinTable(name = "book_authors",
            joinColumns = @JoinColumn(name = "author_id"),
            inverseJoinColumns = @JoinColumn(name = "book_id"))
    private List<Author> authors;

    @OneToMany
    private List<Genre> genres;
    @OneToOne
    private Publisher bookPublisher;
    @OneToMany
    private List<Publication> publications;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDatePublished() {
        return datePublished;
    }

    public void setDatePublished(String datePublished) {
        this.datePublished = datePublished;
    }

    public List<Author> getAuthors() {
        return authors;
    }

    public void setAuthors(List<Author> authors) {
        this.authors = authors;
    }

    public List<Genre> getGenres() {
        return genres;
    }

    public void setGenres(List<Genre> genres) {
        this.genres = genres;
    }

    public Publisher getBookPublisher() {
        return bookPublisher;
    }

    public void setBookPublisher(Publisher bookPublisher) {
        this.bookPublisher = bookPublisher;
    }

    public List<Publication> getPublications() {
        return publications;
    }

    public void setPublications(List<Publication> publications) {
        this.publications = publications;
    }
}
