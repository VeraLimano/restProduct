package com.example.rest.controller;

import com.example.rest.modul.Product;
import com.example.rest.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.NoSuchElementException;

@Controller
public class contr {
    private ProductService service;

    @GetMapping(value = "/js2")
    public String getHomePage() {
        return "js2";
    }

//    @GetMapping("/js2/{id}")
//    public String get(@PathVariable Integer id) {
//        Product product = service.get(id);
//            return "js3";
//    }

    @GetMapping(value = "/js2/{id}")
    public String show(@PathVariable("id") int id, Model model) {
//      получим юзера по id из DAO и передадим на представление
        Product product = service.get(id);
        model.addAttribute("user", product);
        return "js3";
    }

    @GetMapping(value = "/js2/new")
    public String newUser(Model model) {
        Product product = new Product();
        model.addAttribute("user", product);
//      возвращает html форму для создания нового юзера
        return "js4";
    }

}
