import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private noteService: NoteService) {}

  addNoteForm = new FormGroup({
    noteContent: new FormControl(''),
  });

  addNote = (event: Event) => {
    event.preventDefault();
    const noteContent = this.addNoteForm.controls.noteContent.value;
    console.log(noteContent);
  };
}
