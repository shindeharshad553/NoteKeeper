package com.example.EnotesManagementSpringBoot.service;

import com.example.EnotesManagementSpringBoot.DTO.UserDTO;
import com.example.EnotesManagementSpringBoot.dao.userDAO;
import com.example.EnotesManagementSpringBoot.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private userDAO userdao;
    public User login(UserDTO userdto){
//        get the user from the username
        User user=userdao.findByEmail(userdto.getEmail());
        if(user!=null){
            if((user.getPassword()).equals(userdto.getPassword()))
                return user;
        }
        return null;
    }

    public User addUser(User user){
        return userdao.save(user);
    }

//    public User update(User user){
////        check first user exsist with the given id
//        User fetchedUser=userdao.findById(user.getUid()).orElseThrow(() -> new RuntimeException("User with given id does not exsists"));
//        fetchedUser.setNotes(user.getNotes());
//        return fetchedUser;
//    }
}
