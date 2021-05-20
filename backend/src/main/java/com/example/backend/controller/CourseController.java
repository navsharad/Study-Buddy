package com.example.backend.controller;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Course;
import com.example.backend.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.relational.core.sql.In;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    /**
     * Retrieve a list of all courses the user is taking
     * @return a list of all courses the user is taking
     */
    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    /**
     * Create a course object on the frontend
     * @param course course associated with user's task(s)
     * @return course displayed on the frontend
     */
    @PostMapping("/courses")
    public Course createCourse( @RequestBody Course course) {
        return courseRepository.save(course);
    }


    /**
     * Delete a course object from the frontend
     * @param id identification number for course
     * @return a response indicating the course object has been deleted
     */
    @DeleteMapping("/courses/{id}")
    public ResponseEntity <Map<String, Boolean>> deleteCourse(@PathVariable Integer id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(("Course Does not exist")));

        courseRepository.delete(course);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
