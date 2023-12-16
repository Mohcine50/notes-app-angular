import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { Priority } from '../../types';

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
    const noteContent = this.addNoteForm.controls.noteContent.value as string;
    this.addNoteForm.controls.noteContent.reset();
    console.log(noteContent);
    if (noteContent !== '' && noteContent !== null) {
      this.noteService.addNote(noteContent, Priority.LOW);
    }
  };
}
