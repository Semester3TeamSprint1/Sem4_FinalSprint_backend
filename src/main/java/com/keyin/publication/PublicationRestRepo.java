package com.keyin.publication;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "publication", path = "publication")
public interface PublicationRestRepo extends JpaRepository<Publication, Long> {
}
