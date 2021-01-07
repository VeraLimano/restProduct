package com.example.rest.controller;

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

    @GetMapping(value = "/admin")
    public String getPage() {
        return "admin";
    }


}
