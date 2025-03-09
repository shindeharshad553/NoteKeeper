import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { HomeImageComponent } from './mycomponents/home-image/home-image.component';
import { FooterComponent } from './mycomponents/footer/footer.component';
import { LoginComponentComponent } from './mycomponents/login-component/login-component.component';
import { HomeComponentComponent } from './mycomponents/home-component/home-component.component';
import { RegisterComponentComponent } from './mycomponents/register-component/register-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddNoteComponent } from './mycomponents/add-note/add-note.component';
import { ShowNotesComponent } from './mycomponents/show-notes/show-notes.component';
import { EditNoteComponent } from './mycomponents/edit-note/edit-note.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeImageComponent,
    FooterComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    RegisterComponentComponent,
    AddNoteComponent,
    ShowNotesComponent,
    EditNoteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
