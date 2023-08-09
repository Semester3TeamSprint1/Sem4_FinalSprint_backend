package com.keyin.book;

import com.keyin.book.Book;
import com.keyin.genre.Genre;
import com.keyin.publication.Publication;
import com.keyin.publisher.Publisher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.List;

@RepositoryRestResource(collectionResourceRel = "book", path = "book")
public interface BookRestRepo extends JpaRepository<Book, Long> {
    List<Book> findByTitle(@Param("title") String title);
    List<Book> findByGenresContains(@Param("genre") Genre genre);
    List<Book> findByBookPublisher(@Param("publisher") Publisher publisher);
    List<Book> findByPublicationsContains(@Param("publication") Publication publication);
}
