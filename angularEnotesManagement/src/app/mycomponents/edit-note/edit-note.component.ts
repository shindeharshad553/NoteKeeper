import { ActivatedRoute } from '@angular/router';
import { Component, NgZoneOptions, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit{

  constructor(private noteservice:NotesService,private activatedroute:ActivatedRoute) { }
  ngOnInit(): void {
    // fetch the note id from the url
    let id=this.activatedroute.snapshot.paramMap.get('id');

    // on loading this page get the data of the note to be edited
    this.noteservice.getNoteByID(id).subscribe((response)=>{
      console.log(response);
      this.note=response;
    });
  }
note={
  title:'',
  content:'',
  userID:0
}


// function to update the note
editNote(){
  this.noteservice.updateNote(this.note).subscribe((response)=>{
    // console.log(response);
    if(response!==null){
      alert("Note updated successfully");
      // navigate to the show notes page
      window.location.href=`/show-notes/${this.note.userID}`;
    }else{
      alert("Note not updated");
    }
  });
}
}
