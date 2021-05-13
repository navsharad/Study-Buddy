package com.example.backend.controller;

import com.example.backend.model.Course;
import com.example.backend.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CourseController {

    @Autowired
    private CourseRepository CourseRepository;

    // get all classes
    @GetMapping("/classes")
    public List<Course> getAllCourses() {
        return CourseRepository.findAll();
    }
}
