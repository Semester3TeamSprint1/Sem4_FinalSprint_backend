package com.keyin.author;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "author", path = "author")
public interface AuthorRestRepo extends JpaRepository<Author, Long> {
    //Author findByAuthorName(String name);
}
