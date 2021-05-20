package com.example.backend.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TaskTest {

    @Test
    void testId() {
        Task task = new Task();
        int id = 1190;
        task.setId(id);
        assertTrue(task.getId() == id);
    }

    @Test
    void testTaskName() {
        Task task = new Task();
        String id = "Finish Milestone #4";
        task.setTaskName(id);
        assertTrue(task.getTaskName().equals(id));
    }

    @Test
    void testEmail() {
        Task task = new Task();
        String id = "nav.sharad@sjsu.edu";
        task.setEmail(id);
        assertTrue(task.getEmail().equals(id));
    }

    @Test
    void testCourseName() {
        Task task = new Task();
        String id = "CS 151";
        task.setCourseName(id);
        assertTrue(task.getCourseName().equals(id));
    }

    @Test
    void testDueDate() {
        Task task = new Task();
        String id = "May 19th, 2021";
        task.setDueDate(id);
        assertTrue(task.getDueDate().equals(id));
    }
}