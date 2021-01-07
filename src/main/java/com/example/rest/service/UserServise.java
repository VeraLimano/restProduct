package com.example.rest.service;

import com.example.rest.model.Role;
import com.example.rest.model.User;
import com.example.rest.repository.UserRepository;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
@Transactional
public class UserServise {

    @PersistenceContext
    private EntityManager entityManager;

    final
    UserRepository repo;

    public UserServise(UserRepository repo) {
        this.repo = repo;
    }

    public List<User> listAll() {
        return repo.findAll();
    }

    public void save(User user) {
        repo.save(user);
    }

    public void delete(Integer id) {
        repo.deleteById(id);
    }

    public User get(int id) {
        return repo.findById(id).get();
    }

}
