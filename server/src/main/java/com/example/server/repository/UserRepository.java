package com.example.server.repository;

import User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> { //pass in User class and data type of primary key
    public boolean existsByEmail(String email);

    public List<User> findByEmail(String email);


}