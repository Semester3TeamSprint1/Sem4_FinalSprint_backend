package com.keyin.genre;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "genre", path = "genre")
public interface GenreRestRepo extends JpaRepository<Genre, Long> {
}
