package com.example.server.service;

import com.example.server.User.User;
import com.example.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Transactional
    public String createUser(User user){
        try {
            if (!userRepository.existsByEmail(user.getEmail())){
                userRepository.save(user);
                return "User created successfully.";
            }else {
                return "Username takenn.";
            }
        }catch (Exception e){
            throw e;
        }
    }





}
