package com.example.EnotesManagementSpringBoot.controller;

import com.example.EnotesManagementSpringBoot.DTO.UserDTO;
import com.example.EnotesManagementSpringBoot.entity.User;
import com.example.EnotesManagementSpringBoot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")

public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody UserDTO user) {
        User logedInUser=userService.login(user);
        if (logedInUser!=null)
            return new ResponseEntity<User>(logedInUser, HttpStatus.OK);
        return new ResponseEntity<User>((User) null, HttpStatus.NOT_FOUND);
    }

    //    API for registering user
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User registeredUser = userService.addUser(user);
        return new ResponseEntity<User>(registeredUser,HttpStatus.CREATED);
    }
}
