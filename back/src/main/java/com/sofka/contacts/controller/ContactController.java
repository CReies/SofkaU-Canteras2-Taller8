package com.sofka.contacts.controller;

import java.sql.Timestamp;

import com.sofka.contacts.model.Contact;
import com.sofka.contacts.service.ContactService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * Controller cap for the Contacts
 * 
 * @author Cristian Reyes
 */
@RestController
@CrossOrigin("*")
public class ContactController {

  @Autowired
  private ContactService contactService;

  /**
   * Gets all the {@code Contacts}
   * 
   * @return {@code ResponseEntity} with {@code List<Contact>} or {@code Exeption}
   */
  @GetMapping(path = "/contacts")
  public ResponseEntity<?> getcontacts() {
    try {
      return new ResponseEntity<>(contactService.getAll(), HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  /**
   * Gets one {@code Contact} by {@value id}
   * 
   * @param id {@value Id} of the {@code Contact}
   * 
   * @return {@code ResponseEntity} with {@code Contact} or {@code Exeption}
   */
  @GetMapping(path = "/contact/{id}")
  public ResponseEntity<?> getContact(@PathVariable("id") Long id) {
    try {
      return new ResponseEntity<>(contactService.get(id).get(), HttpStatus.OK);

    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  /**
   * Creates a new {@code Contact}
   * 
   * @param c Values of the {@code Contact} to be created
   * 
   * @return {@code ResponseEntity} with {@code Contact} or {@code Exeption}
   */
  @PostMapping(path = "/contact")
  public ResponseEntity<?> postContact(Contact c) {
    try {
      contactService.push(c);
      return new ResponseEntity<>(c, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  /**
   * Updates a {@code Contact} by id
   * 
   * @param id {@value Id} of the {@code Contact} to be updated
   * @param c  Values that will be putted in the {@code Contact}
   * 
   * @return {@code ResponseEntity} with {@code Contact} or {@code Exeption}
   */
  @PutMapping(path = "/contact/{id}")
  public ResponseEntity<?> putContact(@PathVariable("id") Long id, Contact c) {
    try {
      contactService.update(id, c);
      return new ResponseEntity<>(c, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  /**
   * Updates the {@value name} of one {@code Contact}
   * 
   * @param id   {@value Id} of the {@code Contact}
   * @param name New {@value name} for the {@code Contact}
   * 
   * @return {@code ResponseEntity} with {@code Contact} or {@code Exeption}
   */
  @PatchMapping(path = "/contact/name/{id}")
  public ResponseEntity<?> patchContactName(@PathVariable("id") Long id, String name) {
    try {
      var c = contactService.updateName(id, name);
      return new ResponseEntity<>(c, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  /**
   * Updates the {@value lastname} of one {@code Contact}
   * 
   * @param id       {@value Id} of the {@code Contact}
   * @param lastname New {@value lastname} for the {@code Contact}
   * 
   * @return {@code ResponseEntity} with {@code Contact} or {@code Exeption}
   */
  @PatchMapping(path = "/contact/lastname/{id}")
  public ResponseEntity<?> patchContactLastname(@PathVariable("id") Long id, String lastname) {
    try {
      var c = contactService.updateLastname(id, lastname);
      return new ResponseEntity<>(c, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  /**
   * Updates the {@value email} of one {@code Contact}
   * 
   * @param id    {@value Id} of the {@code Contact}
   * @param email New {@value email} for the {@code Contact}
   * 
   * @return {@code ResponseEntity} with {@code Contact} or {@code Exeption}
   */
  @PatchMapping(path = "/contact/email/{id}")
  public ResponseEntity<?> patchContactEmail(@PathVariable("id") Long id, String email) {
    try {
      var c = contactService.updateEmail(id, email);
      return new ResponseEntity<>(c, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  /**
   * Updates the {@value tel} of one {@code Contact}
   * 
   * @param id  {@value Id} of the {@code Contact}
   * @param tel New {@value tel} for the {@code Contact}
   * 
   * @return {@code ResponseEntity} with {@code Contact} or {@code Exeption}
   */
  @PatchMapping(path = "/contact/tel/{id}")
  public ResponseEntity<?> patchContactTel(@PathVariable("id") Long id, String tel) {
    try {
      var c = contactService.updateTel(id, tel);
      return new ResponseEntity<>(c, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  /**
   * Updates the {@value birthday} of one {@code Contact}
   * 
   * @param id       Id of the {@code Contact}
   * @param birthday New {@value birthday} for the {@code Contact}
   * 
   * @return {@code ResponseEntity} with {@code Contact} or {@code Exeption}
   */
  @PatchMapping(path = "/contact/birthay/{id}")
  public ResponseEntity<?> patchContactBirthday(@PathVariable("id") Long id, Timestamp birthday) {
    try {
      var c = contactService.updateBirthday(id, birthday);
      return new ResponseEntity<>(c, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  /**
   * Deletes physically one {@code Contact} by id
   * 
   * @param id {@value Id} of the {@code Contact}
   * 
   * @return {@code ResponseEntity} with {@code null} or {@code Exeption}
   */
  @DeleteMapping(path = "/contact/{id}")
  public ResponseEntity<?> deleteContact(@PathVariable("id") Long id) {
    try {
      contactService.delete(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }
}
