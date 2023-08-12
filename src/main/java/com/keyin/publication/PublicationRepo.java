package com.keyin.publication;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicationRepo extends CrudRepository<Publication, Long> {
}


