package com.example.EnotesManagementSpringBoot.controller;

import com.example.EnotesManagementSpringBoot.DTO.NotesDTO;
import com.example.EnotesManagementSpringBoot.entity.Notes;
import com.example.EnotesManagementSpringBoot.service.NotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

import java.util.List;

@RestController
@RequestMapping("/notes")
@CrossOrigin(origins = "http://localhost:4200")
public class NotesController {

    @Autowired
    private NotesService notesService;

    //    Add the notes
    @PostMapping("/AddNotes")
    public ResponseEntity<Notes> addNotes(@RequestBody NotesDTO note) {
//        System.out.println(note);
        Notes addedNote = notesService.addNote(note);
//        notesService.addNote(note);
        return new ResponseEntity<Notes>(addedNote, HttpStatus.OK);
//        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/getNoteByID/{id}")
    public ResponseEntity<List<Notes>> getAllNotes(@PathVariable("id") int id) {
        List<Notes> allNotes = notesService.getNoteByID(id);
        return new ResponseEntity<List<Notes>>(allNotes, HttpStatus.OK);
    }

    @DeleteMapping("/deleteNote/{id}")
    public String deleteNoteByID(@PathVariable("id") int id) {
        return notesService.deleteNoteByID(id);
    }

    @GetMapping("/getNote/{id}")
    public Notes getNoteByNoteID(@PathVariable int id) {
        Optional<Notes> noteWithGivenID = notesService.getNoteByNoteID(id);
        if(noteWithGivenID.isPresent())
            return noteWithGivenID.get();
        else
            return null;
    }


//    update the note based on its id
    @PutMapping("/update")
    public Notes updateNoteByID(@RequestBody Notes note){
        return notesService.updateNote(note);
    }
}

