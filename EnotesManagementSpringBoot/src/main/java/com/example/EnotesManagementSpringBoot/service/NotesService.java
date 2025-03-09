package com.example.EnotesManagementSpringBoot.service;

import com.example.EnotesManagementSpringBoot.DTO.NotesDTO;
import com.example.EnotesManagementSpringBoot.dao.notesDAO;
import com.example.EnotesManagementSpringBoot.dao.userDAO;
import com.example.EnotesManagementSpringBoot.entity.Notes;
import com.example.EnotesManagementSpringBoot.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class NotesService {
    @Autowired
    private notesDAO notedao;
    @Autowired
    private userDAO userdao;

    @Autowired
    private UserService userService;

    public Notes addNote(NotesDTO note) {
        System.out.println("Inside service " + note);
        int id = note.getUid();
        Optional<User> userOptional = userdao.findById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            System.out.println(user);

            Notes n = new Notes();
            n.setTitle(note.getTitle());  // Setting values from DTO
            n.setContent(note.getContent());
            n.setUserID(note.getUid());
//            n.setUser(user);
//            System.out.println("After saving the fields user is " + );
//            System.out.println("After saving the fields notes is  " + n);
            return notedao.save(n);
//            System.out.println(notedao.save(n));
        } else {
            throw new RuntimeException("user is not present with the " + id + " id");
        }
    }

    public List<Notes> getNoteByID(int id) {
        List<Notes> l = new ArrayList<>();
//        get all notes
        List<Notes> allNotes = notedao.findAll();
        for (Notes n : allNotes) {
            if (n.getUserID() == id)
                l.add(n);
        }
        return l;
    }

    public String deleteNoteByID(int id) {
        Optional<Notes> n = notedao.findById(id);
        if (n.isPresent()) {
            notedao.deleteById(id);
            return "Note deleted successfully";
        } else {
            return "no note to delete";
        }
    }

    //    get note by id
    public Optional<Notes> getNoteByNoteID(int id) {
        Optional<Notes> noteWithGivenID = notedao.findById(id);
        return noteWithGivenID;
    }


    public Notes updateNote(Notes note) {
        Optional<Notes> n = notedao.findById(note.getId());
        if (n.isPresent()) {
            Notes noteTobeUpdated = n.get();
            noteTobeUpdated.setContent(note.getContent());
            noteTobeUpdated.setTitle(note.getTitle());
            noteTobeUpdated.setUserID(note.getUserID());
           return notedao.save(noteTobeUpdated);
        }
        return null;
    }
}
