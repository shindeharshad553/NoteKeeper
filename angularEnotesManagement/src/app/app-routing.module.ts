import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './mycomponents/login-component/login-component.component';
import { HomeComponentComponent } from './mycomponents/home-component/home-component.component';
import { RegisterComponentComponent } from './mycomponents/register-component/register-component.component';
import { AddNoteComponent } from './mycomponents/add-note/add-note.component';
import { ShowNotesComponent } from './mycomponents/show-notes/show-notes.component';
import { EditNoteComponent } from './mycomponents/edit-note/edit-note.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponentComponent
  },
  {
    path:'login',
    component:LoginComponentComponent
  },
  {
    path:'register',
    component:RegisterComponentComponent
  },
  {
    path:'add-note',
    component:AddNoteComponent
  },
  {
    path:'show-notes/:id',
    component:ShowNotesComponent
  },
  {
    path:'edit-note/:id',
    component:EditNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
