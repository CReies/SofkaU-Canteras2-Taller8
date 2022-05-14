package com.sofka.contacts.service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

import com.sofka.contacts.model.Contact;

public interface IContactService {
  List<Contact> getAll();

  Optional<Contact> get(Long id);

  Contact push(Contact c);

  Contact update(Long id, Contact c);

  Contact updateName(Long id, String name);

  Contact updateLastname(Long id, String lastname);

  Contact updateEmail(Long id, String email);

  Contact updateTel(Long id, String tel);

  Contact updateBirthday(Long id, Timestamp birthday);

  void delete(Long id);
}
