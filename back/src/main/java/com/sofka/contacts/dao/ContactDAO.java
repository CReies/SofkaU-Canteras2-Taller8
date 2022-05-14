package com.sofka.contacts.dao;

import java.util.Optional;

import com.sofka.contacts.model.Contact;

import org.springframework.data.repository.CrudRepository;

public interface ContactDAO extends CrudRepository<Contact, Long> {

  Contact save(Optional<Contact> c);
}
