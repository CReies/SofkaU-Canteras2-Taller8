package com.sofka.contacts.service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

import com.sofka.contacts.dao.ContactDAO;
import com.sofka.contacts.model.Contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service cap for the Contacts
 * 
 * @author Cristian Reyes
 * 
 * @see IContactService
 */
@Service
public class ContactService implements IContactService {

  @Autowired
  private ContactDAO contactDAO;

  /**
   * Gets all the {@code Contacts}
   * 
   * @return {@code List<Contact>}
   */
  @Override
  @Transactional(readOnly = true)
  public List<Contact> getAll() {
    return (List<Contact>) contactDAO.findAll();
  }

  /**
   * Gets one {@code Contact} by {@value id}
   * 
   * @param id {@value Id} of the {@code Contact}
   * 
   * @return Optional with {@code Contact}
   */
  @Override
  @Transactional(readOnly = true)
  public Optional<Contact> get(Long id) {
    return contactDAO.findById(id);
  }

  /**
   * Creates a new {@code Contact}
   * 
   * @param c Values of the {@code Contact} to be created
   * 
   * @return {@code Contact} saved
   */
  @Override
  @Transactional
  public Contact push(Contact c) {
    return contactDAO.save(c);
  }

  /**
   * Updates a {@code Contact} by id
   * 
   * @param id {@value Id} of the {@code Contact} to be updated
   * @param c  Values that will be putted in the {@code Contact}
   * 
   * @return {@code Contact} updated
   */
  @Override
  @Transactional
  public Contact update(Long id, Contact c) {
    c.setId(id);
    return contactDAO.save(c);
  }

  /**
   * Updates the {@value name} of one {@code Contact}
   * 
   * @param id   {@value Id} of the {@code Contact}
   * @param name New {@value name} for the {@code Contact}
   * 
   * @return {@code Contact} updated
   */
  @Override
  @Transactional
  public Contact updateName(Long id, String name) {
    var c = contactDAO.findById(id).get();
    c.setName(name);
    return contactDAO.save(c);
  }

  /**
   * Updates the {@value lastname} of one {@code Contact}
   * 
   * @param id       {@value Id} of the {@code Contact}
   * @param lastname New {@value lastname} for the {@code Contact}
   * @return {@code Contact} updated
   */
  @Override
  @Transactional
  public Contact updateLastname(Long id, String lastname) {
    var c = contactDAO.findById(id).get();
    c.setLastname(lastname);
    return contactDAO.save(c);
  }

  /**
   * Updates the {@value email} of one {@code Contact}
   * 
   * @param id    {@value Id} of the {@code Contact}
   * @param email New {@value email} for the {@code Contact}
   * 
   * @return {@code Contact} updated
   */
  @Override
  @Transactional
  public Contact updateEmail(Long id, String email) {
    var c = contactDAO.findById(id).get();
    c.setEmail(email);
    return contactDAO.save(c);
  }

  /**
   * Updates the {@value tel} of one {@code Contact}
   * 
   * @param id  {@value Id} of the {@code Contact}
   * @param tel New {@value tel} for the {@code Contact}
   * 
   * @return {@code Contact} updated
   */
  @Override
  @Transactional
  public Contact updateTel(Long id, String tel) {
    var c = contactDAO.findById(id).get();
    c.setTel(tel);
    return contactDAO.save(c);
  }

  /**
   * Updates the {@value birthday} of one {@code Contact}
   * 
   * @param id       Id of the {@code Contact}
   * @param birthday New {@value birthday} for the {@code Contact}
   * @return {@code Contact} updated
   */
  @Override
  @Transactional
  public Contact updateBirthday(Long id, Timestamp birthday) {
    var c = contactDAO.findById(id).get();
    c.setBirthday(birthday);
    return contactDAO.save(c);
  }

  /**
   * Deletes physically one {@code Contact} by id
   * 
   * @param id {@value Id} of the {@code Contact}
   */
  @Override
  @Transactional
  public void delete(Long id) {
    contactDAO.deleteById(id);
  }

}
