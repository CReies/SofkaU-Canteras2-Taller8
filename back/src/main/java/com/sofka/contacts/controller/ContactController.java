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

@RestController
public class ContactController {

  @Autowired
  private ContactService contactService;

  @GetMapping(path = "/contacts")
  public ResponseEntity<?> getcontacts() {
    try {
      return new ResponseEntity<>(contactService.getAll(), HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  @GetMapping(path = "/contact/{id}")
  public ResponseEntity<?> getContact(@PathVariable("id") Long id) {
    try {
      return new ResponseEntity<>(contactService.get(id).get(), HttpStatus.OK);

    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  @PostMapping(path = "/contact")
  public ResponseEntity<?> postContact(Contact c) {
    try {
      contactService.push(c);
      return new ResponseEntity<>(c, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  @PutMapping(path = "/contact/{id}")
  public ResponseEntity<?> putContact(@PathVariable("id") Long id, Contact c) {
    try {
      contactService.update(id, c);
      return new ResponseEntity<>(c, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  @PatchMapping(path = "/contact/name/{id}")
  public ResponseEntity<?> patchContactName(@PathVariable("id") Long id, String name) {
    try {
      var c = contactService.updateName(id, name);
      return new ResponseEntity<>(c, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  @PatchMapping(path = "/contact/lastname/{id}")
  public ResponseEntity<?> patchContactLastname(@PathVariable("id") Long id, String lastname) {
    try {
      var c = contactService.updateLastname(id, lastname);
      return new ResponseEntity<>(c, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  @PatchMapping(path = "/contact/email/{id}")
  public ResponseEntity<?> patchContactEmail(@PathVariable("id") Long id, String email) {
    try {
      var c = contactService.updateEmail(id, email);
      return new ResponseEntity<>(c, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  @PatchMapping(path = "/contact/tel/{id}")
  public ResponseEntity<?> patchContactTel(@PathVariable("id") Long id, String tel) {
    try {
      var c = contactService.updateTel(id, tel);
      return new ResponseEntity<>(c, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

  @PatchMapping(path = "/contact/birthay/{id}")
  public ResponseEntity<?> patchContactBirthday(@PathVariable("id") Long id, Timestamp birthday) {
    try {
      var c = contactService.updateBirthday(id, birthday);
      return new ResponseEntity<>(c, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(e, HttpStatus.BAD_GATEWAY);
    }
  }

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
