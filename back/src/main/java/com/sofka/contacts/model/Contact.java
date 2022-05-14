package com.sofka.contacts.model;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

/**
 * Model for the contacts table
 * 
 * @author Cristian Reyes
 */
@Data
@Entity
@Table(name = "contacts")
public class Contact implements Serializable {

  private static final long serialVersionUID = 1L;

  // id of the {@code Contact}
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  // name of the {@code Contact}
  @Column(name = "name")
  private String name;

  // lastname of the {@code Contact}
  @Column(name = "lastname")
  private String lastname;

  // birthday of the {@code Contact}
  @Column(name = "birthday")
  private Timestamp birthday;

  @Column(name = "email")
  private String email;

  // tel of the {@code Contact}
  @Column(name = "tel")
  private String tel;

}
