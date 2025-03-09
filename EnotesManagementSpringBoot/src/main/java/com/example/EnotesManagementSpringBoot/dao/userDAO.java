package com.example.EnotesManagementSpringBoot.dao;

import com.example.EnotesManagementSpringBoot.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface userDAO extends JpaRepository<User,Integer> {
    User findByEmail(String email);
}
