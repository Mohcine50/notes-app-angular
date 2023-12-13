import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, NoteComponent],
  templateUrl: './notes.component.html',
  styles: ``,
})
export class NotesComponent {}
