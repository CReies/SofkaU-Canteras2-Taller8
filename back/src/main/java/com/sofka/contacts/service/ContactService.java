package com.sofka.contacts.service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

import com.sofka.contacts.dao.ContactDAO;
import com.sofka.contacts.model.Contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactService implements IContactService {

  @Autowired
  private ContactDAO contactDAO;

  @Override
  @Transactional(readOnly = true)
  public List<Contact> getAll() {
    return (List<Contact>) contactDAO.findAll();
  }

  @Override
  @Transactional(readOnly = true)
  public Optional<Contact> get(Long id) {
    return contactDAO.findById(id);
  }

  @Override
  @Transactional
  public Contact push(Contact c) {
    return contactDAO.save(c);
  }

  @Override
  @Transactional
  public Contact update(Long id, Contact c) {
    c.setId(id);
    return contactDAO.save(c);
  }

  @Override
  @Transactional
  public Contact updateName(Long id, String name) {
    var c = contactDAO.findById(id).get();
    c.setName(name);
    return contactDAO.save(c);
  }

  @Override
  @Transactional
  public Contact updateLastname(Long id, String lastname) {
    var c = contactDAO.findById(id).get();
    c.setLastname(lastname);
    return contactDAO.save(c);
  }

  @Override
  @Transactional
  public Contact updateEmail(Long id, String email) {
    var c = contactDAO.findById(id).get();
    c.setEmail(email);
    return contactDAO.save(c);
  }

  @Override
  @Transactional
  public Contact updateTel(Long id, String tel) {
    var c = contactDAO.findById(id).get();
    c.setTel(tel);
    return contactDAO.save(c);
  }

  @Override
  @Transactional
  public Contact updateBirthday(Long id, Timestamp birthday) {
    var c = contactDAO.findById(id).get();
    c.setBirthday(birthday);
    return contactDAO.save(c);
  }

  @Override
  @Transactional
  public void delete(Long id) {
    contactDAO.deleteById(id);
  }

}
