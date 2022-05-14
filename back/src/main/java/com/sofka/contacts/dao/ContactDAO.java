package com.sofka.contacts.dao;

import com.sofka.contacts.model.Contact;

import org.springframework.data.repository.CrudRepository;

/**
 * DAO of the contacts
 * 
 * @author Cristian Reyes
 * 
 * @see CrudRepository
 */
public interface ContactDAO extends CrudRepository<Contact, Long> {
}
