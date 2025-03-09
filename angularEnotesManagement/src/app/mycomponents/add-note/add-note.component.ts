import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
constructor(private auth:AuthServiceService,private noteservice:NotesService,private router:Router) { }

ngOnInit() {
  const userID=localStorage.getItem('uid');
  if(userID)
     this.note.uid=Number(userID);

    // The user is not loged in then redirect to the login page
    else{
      alert('Please login first');
      this.router.navigate(['/login']);
    }
 }
username='';

// notes object to store the form response and send it to noteservice
note={
  title:'',
  content:'',
  uid:0
}

  addnotes(){
    console.log(this.note);
    this.noteservice.addNotes(this.note).subscribe((response)=>{
      console.log(response);
      if(response!=null){
        // If the response is not null then redirect to the show notes page
        this.router.navigate([`/show-notes/${this.note.uid}`]);
      }
    });
  }


}
