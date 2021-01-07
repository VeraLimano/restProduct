package com.example.rest.controller;

import com.example.rest.model.Role;
import com.example.rest.model.User;
import com.example.rest.service.UserServise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;

@RestController
public class UserController {

 
    UserServise userServise;

    public UserController(UserServise userServise) {
        this.userServise = userServise;
    }

    @GetMapping("/users")
    public List<User> list() {
        return userServise.listAll();
    }

//    @GetMapping("/users/{id}")
//    public ResponseEntity<User> get(@PathVariable Integer id) {
//        try {
//            User user = service.get(id);
//            return new ResponseEntity<Product>(user, HttpStatus.OK);
//        } catch (NoSuchElementException e) {
//            return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
//        }
//    }

    @PostMapping("/usersAdd")
    public void add(@RequestBody User user) {
        userServise.save(user);
    }


//    public String create(@ModelAttribute("user") User user, @RequestParam("editRoles") String[] roles){
////        принимать на вход post запрос, создавать нового юзера, и добавлять в БД
//        Set<Role> roleList = new HashSet<Role>();
//        for(String r : roles) {
//            roleList.add(userService.getRole(r));
//        }
//        user.setRoles(roleList);
//        userService.save(user);
//        return "redirect:/admin";

    @PutMapping("/usersEdit")
    public ResponseEntity<?> update(@RequestBody User user) {
        try {
            userServise.save(user);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/usersDelete/{id}")
    public void delete(@PathVariable Integer id) {
        userServise.delete(id);
    }

}
