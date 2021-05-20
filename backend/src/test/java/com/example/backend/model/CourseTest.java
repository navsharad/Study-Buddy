package com.example.backend.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CourseTest {

    @Test
    void testId() {
        Course course = new Course();
        int id = 1190;
        course.setId(id);
        assertTrue(course.getId() == id);
    }

    @Test
    void testcourseName() {
        Course course = new Course();
        String id = "CS 151";
        course.setcourseName(id);
        assertTrue(course.getcourseName().equals(id));
    }

    @Test
    void testInstructorName() {
        Course course = new Course();
        String id = "Nav Sharad";
        course.setInstructorName(id);
        assertTrue(course.getInstructorName().equals(id));
    }

    @Test
    void testEmail() {
        Course course = new Course();
        String id = "nav.sharad@sjsu.edu";
        course.setEmail(id);
        assertTrue(course.getEmail().equals(id));
    }
}