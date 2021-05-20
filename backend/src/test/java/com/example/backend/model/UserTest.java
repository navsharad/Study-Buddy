package com.example.backend.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    @Test
    void testId() {
        User user = new User();
        int id = 1190;
        user.setId(id);
        assertTrue(user.getId() == id);
    }

    @Test
    void testFirstName() {
        User user = new User();
        String id = "Nav";
        user.setFirstName(id);
        assertTrue(user.getFirstName().equals(id));
    }

    @Test
    void testLastName() {
        User user = new User();
        String id = "Sharad";
        user.setLastName(id);
        assertTrue(user.getLastName().equals(id));
    }

    @Test
    void testEmail() {
        User user = new User();
        String id = "nav.sharad@sjsu.edu";
        user.setEmail(id);
        assertTrue(user.getEmail().equals(id));
    }

    @Test
    void testPassword() {
        User user = new User();
        String id = "abcde";
        user.setPassword(id);
        assertTrue(user.getPassword().equals(id));
    }
}