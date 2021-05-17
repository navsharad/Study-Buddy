package com.example.backend.controller;

import com.example.backend.model.Course;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
    @RestController
    @RequestMapping("/api/v1")
    public class UserController {

        @Autowired
        private UserRepository userRepository;

        // user registration
        @PostMapping("/user")
        public User createUser(@RequestBody User user) {
            return userRepository.save(user);
        }

    }

