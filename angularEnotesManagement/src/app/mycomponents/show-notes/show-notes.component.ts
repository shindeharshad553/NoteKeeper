import { NotesService } from 'src/app/services/notes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent implements OnInit{

  constructor(private notesservice:NotesService,private router:Router,private activatedroute:ActivatedRoute){}
  id:any;
  ngOnInit(): void {
    if(!localStorage.getItem('uid')){
      alert('Please login first');
      this.router.navigate(['/login']);
    }
    else{
      // extract the id from the url(user id )
      this.id=this.activatedroute.snapshot.paramMap.get('id');
      this.showNotes(this.id);
    }
  }

  // array to store all notes from API
  allNotes: any[] = [];
  username:any;
  showNotes(id:any){
    this.notesservice.showAllNotes(id).subscribe((response)=>{
      console.log(response);

      // get the name of the loged in user
      this.username=localStorage.getItem('username');
      if(response.length>0)
         // storing all notes in array
          this.allNotes=response;
      else{
        // if response is null then show the message that no notes present
        alert("No notes Present");
        // redirect to the add notes page
        this.router.navigate(['/add-note']);
      }
    });
  }

  deleteByID(note:any){
    console.log(note.id);
    this.notesservice.deleteNoteByID(note.id).subscribe((response)=>{
      // console.log(response);
      if(response==="Note deleted successfully"){
        this.showNotes(this.id);
      }
    });
  }
}
