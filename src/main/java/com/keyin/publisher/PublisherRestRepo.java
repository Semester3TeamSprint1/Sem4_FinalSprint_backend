package com.keyin.publisher;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "publisher", path = "publisher")
public interface PublisherRestRepo extends JpaRepository<Publisher, Long> {
}
