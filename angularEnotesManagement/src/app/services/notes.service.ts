import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpclient:HttpClient,private auth:AuthServiceService) { }
  addNotes(note:any):Observable<any>{
    const apiUrl="http://localhost:8080/notes/AddNotes";
    return this.httpclient.post(apiUrl,note);
  }


  // function to call api to show all notes
  showAllNotes(id:any):Observable<any>{
    const apiUrl=`http://localhost:8080/notes/getNoteByID/${id}`;
    return this.httpclient.get(apiUrl);
  }


  // delete note by note id

  deleteNoteByID(id:any):Observable<any>{
    const apiUrl=`http://localhost:8080/notes/deleteNote/${id}`;
    return this.httpclient.delete(apiUrl,{responseType: 'text'});
  }


  // get the note by the note id
  getNoteByID(id:any):Observable<any>{
    const apiUrl=`http://localhost:8080/notes/getNote/${id}`;
    return this.httpclient.get(apiUrl);
  }

  // update the note
  updateNote(note:any):Observable<any>{
    console.log(note);
    const apiUrl=`http://localhost:8080/notes/update`;
    return this.httpclient.put(apiUrl,note);
  }
}
