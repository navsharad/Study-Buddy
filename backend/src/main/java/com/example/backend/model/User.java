package com.example.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "users")

public class User {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;

        @Column(name = "first_name", nullable = false)
        private String firstName;

        @Column(name = "last_name", nullable = false)
        private String lastName;

        @Column(name = "email", nullable = false, unique = true)
        private String email;

        @Column(name = "password", nullable = false)
        private String password;

    /**
     * Default constructor
     */
    public User () {

        }

    /**
     * Create User object
     * @param firstName user's first name
     * @param lastName user's last name
     * @param email user's email
     * @param password user's password
     */
        public User(String firstName, String lastName, String email, String password) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
        }

    /**
     * Get user's id
     * @return the identification number
     */
    public int getId() {
            return id;
        }

    /**
     * Set user's id
     * @param id the identification number
     */
    public void setId(Integer id) {
            this.id = id;
        }

    /**
     * Get user's first name
     * @return the first name
     */
    public String getFirstName() {
            return firstName;
        }

    /**
     * Set user's first name
     * @param firstName the new first name
     */
    public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

    /**
     * Get user's last name
     * @return the last name
     */
    public String getLastName() {
            return lastName;
        }

    /**
     * Set user's last name
     * @param lastName the new last name
     */
    public void setLastName(String lastName) {
            this.lastName = lastName;
        }

    /**
     * Get user's email
     * @return the email
     */
    public String getEmail() {
            return email;
        }

    /**
     * Set user's email
     * @param email the new email
     */
    public void setEmail(String email) {
            this.email = email;
        }

    /**
     * Get user's password
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * Set user's password
     * @param password the new password
     */
    public void setPassword(String password) {
        this.password = password;
    }

}
