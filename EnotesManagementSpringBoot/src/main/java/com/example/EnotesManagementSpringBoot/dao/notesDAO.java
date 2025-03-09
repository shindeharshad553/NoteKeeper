package com.example.EnotesManagementSpringBoot.dao;

import com.example.EnotesManagementSpringBoot.entity.Notes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface notesDAO extends JpaRepository<Notes,Integer> {
}
